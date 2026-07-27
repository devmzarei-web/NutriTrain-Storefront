import type { CollectionConfig } from 'payload'

export const PricingTiers: CollectionConfig = {
  slug: 'pricing-tiers',
  labels: {
    singular: 'Pricing Tier',
    plural: 'Pricing Tiers',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'priceToman', 'tierId', 'isPopular', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Plan Name (e.g. Starter, Pro, Agency)',
    },
    {
      name: 'tierId',
      type: 'text',
      required: true,
      unique: true,
      label: 'Tier Identifier (e.g. starter_monthly, pro_yearly)',
    },
    {
      name: 'priceToman',
      type: 'number',
      required: true,
      label: 'Price in Toman',
    },
    {
      name: 'billingPeriod',
      type: 'text',
      defaultValue: 'ماهانه',
      label: 'Billing Period (e.g. ماهانه, سالانه)',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Short Description',
    },
    {
      name: 'featuresList',
      type: 'array',
      label: 'Included Features',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Feature Detail',
        },
      ],
    },
    {
      name: 'isPopular',
      type: 'checkbox',
      defaultValue: false,
      label: 'Mark as Most Popular / Featured Tier',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'شروع اشتراک',
      label: 'CTA Button Label',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
}
