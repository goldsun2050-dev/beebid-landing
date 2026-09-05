module.exports = {
  apps: [
    {
      name: 'beebid-landing',
      cwd: '/root/project/beebid-landing',
      script: '.next/standalone/server.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '127.0.0.1',
        PORT: '3200',
      },
      autorestart: true,
      max_restarts: 10,
      time: true,
    },
  ],
}
