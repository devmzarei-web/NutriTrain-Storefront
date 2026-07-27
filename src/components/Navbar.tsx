'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dumbbell, Menu, Sparkles, UserCheck, X } from 'lucide-react'

interface NavbarProps {
  globalData?: any
}

export default function Navbar({ globalData }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change color after scrolling past most of the hero
      setIsScrolled(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          {logoUrl ? (
            <div className="relative h-10 w-auto min-w-[40px] max-w-[200px] flex items-center">
              <Image 
                src={logoUrl} 
                alt={logoAlt} 
                width={200} 
                height={40} 
                className="object-contain object-right h-full w-auto" 
              />
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md group-hover:scale-105 transition-transform">
              <Dumbbell className="w-5 h-5" />
            </div>
          )}


        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link: any, index: number) => (
            <a
              key={index}
              href={link.url}
              className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-white/70 hover:text-emerald-400'}`}
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
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
              isScrolled 
                ? 'bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 shadow-sm' 
                : 'bg-white/10 border border-white/15 text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <UserCheck className={`w-4 h-4 ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`} />
            <span>ورود مربیان به پنل</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white/80 hover:bg-white/10'}`}
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
