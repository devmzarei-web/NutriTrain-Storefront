import { getStorefrontData } from '@/lib/payload'
import StorefrontClient from '@/components/StorefrontClient'

export const revalidate = 60

export default async function HomePage() {
  const storefrontData = await getStorefrontData()

  return <StorefrontClient data={storefrontData} />
}
