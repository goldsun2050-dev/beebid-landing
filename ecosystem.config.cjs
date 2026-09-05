module.exports = {
  apps: [
    {
      name: 'beebid-landing',
      cwd: '/root/project/beebid-landing',
      script: '.next/standalone/server.js',
      // Next.js 16 requires Node >=20.9; the box's system /usr/bin/node is v18
      // (used by the Vite-based sibling apps), so this pins to the newer
      // nvm-managed Node already present on the server instead of touching
      // the system default that flybid-app/admin/backend/mcp rely on.
      interpreter: '/root/.nvm/versions/node/v22.23.1/bin/node',
      env: {
        NODE_ENV: 'production',
        HOSTNAME: '127.0.0.1',
        PORT: '3400',
      },
      autorestart: true,
      max_restarts: 10,
      time: true,
    },
  ],
}
