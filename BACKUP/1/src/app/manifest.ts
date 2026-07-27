import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NutriTrain Storefront | پلتفرم هوشمند مربیان',
    short_name: 'NutriTrain',
    description: 'سامانه هوشمند مدیریت برنامه‌های ورزشی و تغذیه‌ای مربیان بدنسازی',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFCFF',
    theme_color: '#059669',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
