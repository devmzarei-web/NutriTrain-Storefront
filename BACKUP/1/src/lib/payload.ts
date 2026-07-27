import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function getPayloadClient() {
  const config = await configPromise
  return await getPayload({ config })
}

export async function getStorefrontData() {
  try {
    const payload = await getPayloadClient()

    const [globalSettings, heroSection, featuresRes, pricingRes, faqsRes] = await Promise.all([
      payload.findGlobal({ slug: 'global-settings' as any }).catch(() => null),
      payload.findGlobal({ slug: 'hero-section' as any }).catch(() => null),
      payload.find({ collection: 'features' as any, sort: 'order' }).catch(() => ({ docs: [] })),
      payload.find({ collection: 'pricing-tiers' as any, sort: 'order' }).catch(() => ({ docs: [] })),
      payload.find({ collection: 'faqs' as any, sort: 'order' }).catch(() => ({ docs: [] })),
    ])

    return {
      globalSettings,
      heroSection,
      features: (featuresRes as any)?.docs || [],
      pricingTiers: (pricingRes as any)?.docs || [],
      faqs: (faqsRes as any)?.docs || [],
    }
  } catch (error) {
    console.warn('Payload CMS connection fallback, returning default data:', error)
    return {
      globalSettings: null,
      heroSection: null,
      features: [],
      pricingTiers: [],
      faqs: [],
    }
  }
}
