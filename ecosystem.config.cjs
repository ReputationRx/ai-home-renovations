/** PM2 process config for aaPanel / self-hosted deploy */
module.exports = {
  apps: [
    {
      name: 'ai-home-renovations-stage',
      cwd: '/www/wwwroot/stage.aihomerenovations.com/app',
      script: 'server.js',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3011,
        HOSTNAME: '127.0.0.1',
      },
      max_memory_restart: '512M',
      error_file: '/www/wwwlogs/ai-home-renovations-stage-error.log',
      out_file: '/www/wwwlogs/ai-home-renovations-stage-out.log',
      merge_logs: true,
      time: true,
    },
  ],
};
