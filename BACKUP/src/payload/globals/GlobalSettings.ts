import type { GlobalConfig } from 'payload'

export const GlobalSettings: GlobalConfig = {
  slug: 'global-settings',
  label: 'Global & Footer Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: 'NutriTrain | سامانه هوشمند مدیریت مربیان و ورزشکاران',
      required: true,
      label: 'Site Name / Brand Title',
    },
    {
      name: 'brandNameFirst',
      type: 'text',
      defaultValue: 'Nutri',
      label: 'Brand Name Prefix (e.g. Nutri)',
    },
    {
      name: 'brandNameSecond',
      type: 'text',
      defaultValue: 'Train',
      label: 'Brand Name Highlight (e.g. Train)',
    },
    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Brand Logo Image (Uploaded in Media)',
    },
    {
      name: 'contactPhone',
      type: 'text',
      defaultValue: '۰۲۱-۹۱۰۰۰۰۰۰',
      label: 'Contact Phone Number',
    },
    {
      name: 'contactEmail',
      type: 'text',
      defaultValue: 'support@nutritrain.ir',
      label: 'Support Email',
    },
    {
      name: 'panelUrl',
      type: 'text',
      defaultValue: 'https://panel.nutritrain.ir',
      label: 'Trainer Panel URL (App Direct Link)',
    },
    {
      name: 'navLinks',
      type: 'array',
      label: 'Navigation Links',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Link Label',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'URL or Anchor (e.g. #features, #pricing)',
        },
      ],
    },
    {
      name: 'footerDescription',
      type: 'textarea',
      defaultValue: 'پلتفرم تخصصی برنامه‌ریزی ورزشی و تغذیه‌ای مربیان با ابزارهای هوش مصنوعی و اتصال به درگاه‌های پرداخت شتاب.',
      label: 'Footer Description Text',
    },
    {
      name: 'footerSecurityBadgeText',
      type: 'text',
      defaultValue: 'تمامی پرداخت‌های فروشگاه از طریق درگاه پرداخت امن زیبال انجام شده و بلافاصله حساب کاربر تایید می‌گردد.',
      label: 'Footer Security & Trust Text',
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© ۱۴۰۴ NutriTrain Storefront. تمامی حقوق محفوظ است.',
      label: 'Copyright Notice',
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'instagram',
          type: 'text',
          defaultValue: 'https://instagram.com',
          label: 'Instagram URL',
        },
        {
          name: 'telegram',
          type: 'text',
          defaultValue: 'https://t.me',
          label: 'Telegram URL',
        },
        {
          name: 'whatsapp',
          type: 'text',
          defaultValue: 'https://wa.me',
          label: 'WhatsApp Support Link',
        },
      ],
    },
  ],
}
