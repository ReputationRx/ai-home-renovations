/**
 * Dark-mode chrome — matches header (`dark:bg-[#0f172a]/95`) and footer fill.
 * Use for section canvases and card/tile surfaces so the UI reads as one plane.
 */
export const DARK_CHROME = '#0f172a' as const

export const darkCanvas = 'dark:bg-[#0f172a]'
/** Tile interiors use the original project tone. */
export const darkTile = 'dark:bg-gray-800'
/** Collapse gradients to the chrome in dark mode */
export const darkGradientFlat = 'dark:from-[#0f172a] dark:to-[#0f172a]'
export const darkTileOutline = 'dark:border-gray-700'
