import fs from 'fs'
import { getPayload } from 'payload'

// Automatically load .env environment variables for standalone script execution
if (fs.existsSync('.env')) {
  try {
    process.loadEnvFile('.env')
  } catch (e) {
    // Node.js fallback
  }
}

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
