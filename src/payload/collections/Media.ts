import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
  ],
  upload: {
    staticDir: 'public/media',
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        fit: 'contain',
        background: 'transparent',
      },
      {
        name: 'hero',
        width: 1200,
        height: 630,
        fit: 'contain',
        background: 'transparent',
      },
    ],
  },
}
