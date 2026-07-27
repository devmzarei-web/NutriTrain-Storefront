import type { CollectionConfig } from 'payload'

export const Features: CollectionConfig = {
  slug: 'features',
  labels: {
    singular: 'Feature',
    plural: 'Features',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'badge', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Feature Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'badge',
      type: 'text',
      label: 'Highlight Badge (e.g. AI-Powered, Popular)',
    },
    {
      name: 'icon',
      type: 'select',
      defaultValue: 'Sparkles',
      options: [
        { label: 'Sparkles (AI)', value: 'Sparkles' },
        { label: 'Dumbbell (Workout)', value: 'Dumbbell' },
        { label: 'Utensils (Nutrition)', value: 'Utensils' },
        { label: 'TrendingUp (Analytics)', value: 'TrendingUp' },
        { label: 'Zap (Speed)', value: 'Zap' },
        { label: 'ShieldCheck (Security)', value: 'ShieldCheck' },
        { label: 'Users (Client Management)', value: 'Users' },
      ],
      label: 'Icon Identifier',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
}
