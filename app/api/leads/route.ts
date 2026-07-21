import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Send to CRM (GoHighLevel, HubSpot, etc.)
    // 2. Send email notification
    // 3. Store in database
    // 4. Send to webhook

    // Example: Log the lead (remove in production)
    console.log('New lead received:', {
      name: body.name,
      phone: body.phone,
      email: body.email,
      projectType: body.projectType,
      source: body.source,
      timestamp: body.timestamp,
    })

    // Example webhook integration (replace with your actual endpoint)
    // await fetch('https://your-webhook-url.com/leads', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(body),
    // })

    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}

