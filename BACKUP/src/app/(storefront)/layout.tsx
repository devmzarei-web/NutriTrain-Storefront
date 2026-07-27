import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/app/globals.css'

const fontEnglish = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-english',
  display: 'swap',
})

const fontVazir = localFont({
  src: [
    {
      path: '../../../public/fonts/Vazirmatn-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Vazirmatn-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
  display: 'swap',
})

const fontMorabba = localFont({
  src: [
    {
      path: '../../../public/fonts/Morabba-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-morabba',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#059669',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'NutriTrain Storefront | پلتفرم هوشمند مربیان ورزشی و تغذیه‌ای',
  description:
    'سامانه هوشمند تنظیم برنامه ورزشی و غذایی، مدیریت شاگردان، صدور سریع PWA و اتصال مستقیم به درگاه پرداخت زیبال.',
  keywords: [
    'NutriTrain',
    'برنامه ورزشی',
    'برنامه تغذیه',
    'پلتفرم مربیان',
    'بدنسازی',
    'زیبال',
    'PWA مربیگری',
  ],
  authors: [{ name: 'NutriTrain Team' }],
  manifest: '/manifest.json',
}

export default function StorefrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${fontVazir.variable} ${fontMorabba.variable} ${fontEnglish.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-[#FAFCFF] text-slate-900 font-sans">
        {children}
      </body>
    </html>
  )
}
