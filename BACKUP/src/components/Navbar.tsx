'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dumbbell, Menu, Sparkles, UserCheck, X } from 'lucide-react'

interface NavbarProps {
  globalData?: any
}

export default function Navbar({ globalData }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const logoUrl = globalData?.logoImage?.url || null
  const logoAlt = globalData?.logoImage?.alt || 'NutriTrain Logo'
  const brandFirst = globalData?.brandNameFirst || 'Nutri'
  const brandSecond = globalData?.brandNameSecond || 'Train'
  const panelUrl = globalData?.panelUrl || 'https://panel.nutritrain.ir'
  const navLinks = globalData?.navLinks || [
    { label: 'ویژگی‌ها', url: '#features' },
    { label: 'پلن‌های اشتراک', url: '#pricing' },
    { label: 'سوالات متداول', url: '#faqs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all">
      <div className="max-w-7xl mx-auto rounded-2xl px-6 py-3 flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          {logoUrl ? (
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md">
              <Image src={logoUrl} alt={logoAlt} fill className="object-cover" />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5" />
            </div>
          )}

          <div className="flex flex-col">
            <span dir="ltr" className="text-xl font-heading font-black text-white tracking-tight flex items-center gap-0.5">
              <span>{brandFirst}</span>
              <span className="text-emerald-400">{brandSecond}</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-400 inline-block ml-1" />
            </span>
            <span className="text-[10px] font-bold text-white/50 tracking-wide">
              پلتفرم هوشمند مربیان
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              className="text-sm font-semibold text-white/70 hover:text-emerald-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Panel Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white font-bold text-sm hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>ورود مربیان به پنل</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-white/80 hover:bg-white/10 transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10">
          {navLinks.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold text-white/80 hover:text-emerald-400 py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center mt-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
          >
            ورود مربیان به پنل
          </a>
        </div>
      )}
    </header>
  )
}
