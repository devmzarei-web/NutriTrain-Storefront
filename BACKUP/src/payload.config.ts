import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

import { FAQs } from './payload/collections/FAQs'
import { Features } from './payload/collections/Features'
import { Media } from './payload/collections/Media'
import { PricingTiers } from './payload/collections/PricingTiers'
import { Users } from './payload/collections/Users'

import { GlobalSettings } from './payload/globals/GlobalSettings'
import { HeroSection } from './payload/globals/HeroSection'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Features, PricingTiers, FAQs],
  globals: [GlobalSettings, HeroSection],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || 'nutritrain_storefront_secret_key_2026_super_secure',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || 'postgres://postgres:postgres@127.0.0.1:5432/nutritrain_storefront',
    },
  }),
})
