'use client'

import { Dumbbell, Instagram, Send, Shield, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { toFarsiDigits } from '@/lib/utils'

interface FooterProps {
  globalData?: any
}

export default function Footer({ globalData }: FooterProps) {
  const logoUrl = globalData?.logoImage?.url || null
  const logoAlt = globalData?.logoImage?.alt || 'NutriTrain Logo'
  const brandFirst = globalData?.brandNameFirst || 'Nutri'
  const brandSecond = globalData?.brandNameSecond || 'Train'
  const footerDesc =
    globalData?.footerDescription ||
    'پلتفرم تخصصی برنامه‌ریزی ورزشی و تغذیه‌ای مربیان با ابزارهای هوش مصنوعی و اتصال به درگاه‌های پرداخت شتاب.'
  const securityText =
    globalData?.footerSecurityBadgeText ||
    'تمامی پرداخت‌های فروشگاه از طریق درگاه پرداخت امن زیبال انجام شده و بلافاصله حساب کاربر تایید می‌گردد.'
  const rawCopyright = globalData?.copyrightText || '© ۱۴۰۵ NutriTrain Storefront. تمامی حقوق محفوظ است.'
  const copyrightText = toFarsiDigits(rawCopyright)

  const navLinks = globalData?.navLinks || [
    { label: 'امکانات مربیگری', url: '#features' },
    { label: 'تعرفه‌ها و اشتراک', url: '#pricing' },
    { label: 'سوالات متداول', url: '#faqs' },
  ]

  const instagramUrl = globalData?.socialLinks?.instagram || '#'
  const telegramUrl = globalData?.socialLinks?.telegram || '#'

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md">
                  <Image src={logoUrl} alt={logoAlt} fill className="object-cover" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 font-bold">
                  <Dumbbell className="w-6 h-6" />
                </div>
              )}

              <span dir="ltr" className="text-2xl font-heading font-black tracking-tight flex items-center gap-0.5">
                <span className="font-en">{brandFirst}</span>
                <span className="text-emerald-400 font-en">{brandSecond}</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {footerDesc}
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-bold text-slate-200">دسترسی سریع</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              {navLinks.map((link: any, idx: number) => (
                <li key={idx}>
                  <a href={link.url} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                    <span className="text-emerald-500 text-xs">‹</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Security & Payment Trust */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-heading font-bold text-slate-200">امنیّت و درگاه رسمی</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {securityText}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-bold text-emerald-400 flex items-center gap-2 shadow-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>تایید رسمی درگاه پرداخت زیبال</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{copyrightText}</p>
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin" />
            <span className="font-fa">طراحی و ساخت توسط 
              <a href="https://www.devzarei.ir/fa.html" target="_blank" rel="noopener noreferrer" className="font-fa">  محمدعلی زارعی</a></span>
          </div>
        </div>
      </div>
    </footer>
  )
}
