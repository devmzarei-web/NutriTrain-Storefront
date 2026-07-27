import type { CollectionConfig } from 'payload'

export const FAQs: CollectionConfig = {
  slug: 'faqs',
  labels: {
    singular: 'FAQ',
    plural: 'FAQs',
  },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Answer',
    },
    {
      name: 'category',
      type: 'select',
      defaultValue: 'general',
      options: [
        { label: 'General (عمومی)', value: 'general' },
        { label: 'Pricing & Payments (قیمت‌گذاری و پرداخت)', value: 'pricing' },
        { label: 'Trainer Features (امکانات مربیان)', value: 'features' },
        { label: 'Technical & PWA (فنی و اپلیکیشن)', value: 'technical' },
      ],
      label: 'Category',
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      label: 'Display Order',
    },
  ],
}
