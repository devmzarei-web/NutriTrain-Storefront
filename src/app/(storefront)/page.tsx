import { Suspense } from 'react'
import { getStorefrontData } from '@/lib/payload'
import StorefrontClient from '@/components/StorefrontClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
  const storefrontData = await getStorefrontData()

  return (
    <Suspense fallback={null}>
      <StorefrontClient data={storefrontData} />
    </Suspense>
  )
}
