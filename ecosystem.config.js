// PM2 ecosystem file for production deployment
module.exports = {
  apps: [
    {
      name: 'mcgeo-website',
      script: 'npm',
      args: 'start',
      cwd: '/path/to/your/project', // Update this path
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G'
    }
  ]
};



