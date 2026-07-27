import { postgresAdapter } from "@payloadcms/db-postgres"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"
import path from "path"
import { fileURLToPath } from "url"

import { Media } from "./src/collections/Media"
import { HeaderNav } from "./src/collections/HeaderNav"
import { HeroSlides } from "./src/collections/HeroSlides"
import { Features } from "./src/collections/Features"
import { PricingPlans } from "./src/collections/PricingPlans"
import { Faqs } from "./src/collections/Faqs"
import { HeroSection } from "./src/globals/HeroSection"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log("DB_URI inside payload.config.ts:", process.env.DATABASE_URI);

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  admin: {
    user: "users",
  },
  collections: [
    Media,
    HeaderNav,
    HeroSlides,
    Features,
    PricingPlans,
    Faqs,
    {
      slug: "users",
      auth: true,
      fields: [],
    },
  ],
  globals: [HeroSection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "nutritrain_secret_key_987654321",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
})
