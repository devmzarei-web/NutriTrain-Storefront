import fs from 'fs'

// Explicitly parse .env file line by line
if (fs.existsSync('.env')) {
  const envContent = fs.readFileSync('.env', 'utf8')
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx > 0) {
        const key = trimmed.slice(0, eqIdx).trim()
        let val = trimmed.slice(eqIdx + 1).trim()
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.slice(1, -1)
        }
        process.env[key] = val
      }
    }
  }
}

const activeUri = process.env.DATABASE_URI || process.env.POSTGRES_URL || process.env.DATABASE_URL || ''
console.log(`Connecting with URI: ${activeUri.replace(/:([^@]+)@/, ':****@')}`)

import { getPayload } from 'payload'
import configPromise from './src/payload.config.ts'

async function sync() {
  console.log('Initializing Payload and creating PostgreSQL tables...')
  const config = await configPromise
  const payload = await getPayload({ config })
  console.log('SUCCESS: All PostgreSQL tables created successfully!')
  process.exit(0)
}

sync().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
