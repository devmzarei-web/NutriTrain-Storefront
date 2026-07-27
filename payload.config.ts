import { sqliteAdapter } from "@payloadcms/db-sqlite"
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

export default buildConfig({
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
  db: sqliteAdapter({
    client: {
      url: "file:./payload.db",
    },
  }),
})
