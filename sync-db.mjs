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
