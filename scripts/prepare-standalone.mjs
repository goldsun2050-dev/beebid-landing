// next build with output:'standalone' doesn't copy public/ or .next/static
// into .next/standalone — copy them so `node .next/standalone/server.js` can
// serve the site on its own (this is what pm2 runs in production).
import { cp } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))

await cp(`${root}/public`, `${root}/.next/standalone/public`, { recursive: true })
await cp(`${root}/.next/static`, `${root}/.next/standalone/.next/static`, { recursive: true })

console.log('Copied public/ and .next/static into .next/standalone/')
