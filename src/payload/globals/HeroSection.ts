import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  label: 'Hero Section',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      defaultValue: 'نسل جدید پلتفرم مربیگری هوشمند 🚀',
      required: true,
      label: 'Top Highlight Badge',
    },
    {
      name: 'headlinePrimary',
      type: 'text',
      defaultValue: 'مدیریت هوشمند برنامه تمرینی',
      required: true,
      label: 'Primary Headline (Line 1)',
    },
    {
      name: 'headlineGradient',
      type: 'text',
      defaultValue: 'و تغذیه‌ای مربیان بدنسازی',
      required: true,
      label: 'Gradient Headline (Line 2)',
    },
    {
      name: 'subtitle',
      type: 'textarea',
      defaultValue: 'وقت خود را صرف رشد کنید، نه کارهای تکراری. با ابزارهای نوتری‌ترِین، مدیریت ده‌ها شاگرد سریع‌تر و دقیق‌تر از همیشه است.',
      required: true,
      label: 'Right Subtitle / Description',
    },
    {
      name: 'secondaryBadgeText',
      type: 'text',
      defaultValue: 'AI EMPOWERED WORKFLOW',
      label: 'Left Super Title (Badge)',
    },
    {
      name: 'secondaryHeadlinePrimary',
      type: 'text',
      defaultValue: 'برنامه‌های علمی و دقیق',
      label: 'Left Headline (Line 1)',
    },
    {
      name: 'secondaryHeadlineGradient',
      type: 'text',
      defaultValue: 'طراحی با هوش مصنوعی',
      label: 'Left Headline (Line 2)',
    },
    {
      name: 'secondarySubtitle',
      type: 'textarea',
      defaultValue: 'صدور سریع و حرفه‌ای برنامه‌های تمرینی و غذایی در پایه هوش مصنوعی، برای ارائه بالاترین کیفیت به شاگردان.',
      label: 'Left Subtitle / Description',
    },
    {
      name: 'primaryCtaLabel',
      type: 'text',
      defaultValue: 'شروع رایگان اشتراک مربی',
      label: 'Primary CTA Button Label',
    },
    {
      name: 'secondaryCtaLabel',
      type: 'text',
      defaultValue: 'بررسی امکانات',
      label: 'Secondary CTA Button Label',
    },
    {
      name: 'athleteImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Athlete / Trainer Portrait (Transparent PNG — No Background)',
    },
    {
      name: 'galleryImages',
      type: 'array',
      label: 'Hero Gallery Screenshots (Curved Ballroom Arc)',
      labels: {
        singular: 'Gallery Image',
        plural: 'Gallery Images',
      },
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Screenshot Image',
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text / Caption',
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Hero Counter Stats',
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          label: 'Stat Value (e.g. +۵,۰۰۰)',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Stat Description (e.g. برنامه صادر شده)',
        },
      ],
    },
  ],
}
