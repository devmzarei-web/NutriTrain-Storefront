'use client'

import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { CheckCircle2, UserCheck, ExternalLink, X } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Pricing from './Pricing'
import FAQ from './FAQ'
import Footer from './Footer'

interface StorefrontClientProps {
  data: {
    globalSettings: any
    heroSection: any
    features: any[]
    pricingTiers: any[]
    faqs: any[]
  }
}

export default function StorefrontClient({ data }: StorefrontClientProps) {
  useScrollReveal()

  const searchParams = useSearchParams()
  const paymentStatus = searchParams.get('payment')
  const trackId = searchParams.get('trackId')
  const refNumber = searchParams.get('refNumber')
  const fullName = searchParams.get('fullName')

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  useEffect(() => {
    if (paymentStatus === 'success') {
      setShowSuccessModal(true)
    }
  }, [paymentStatus])

  const panelUrl = data.globalSettings?.panelUrl || 'https://panel.nutritrain.ir'

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-slate-900 selection:bg-emerald-500 selection:text-white relative">
      <Navbar globalData={data.globalSettings} />
      <main>
        <Hero heroData={data.heroSection} />
        <Features features={data.features} />
        <Pricing pricingTiers={data.pricingTiers} />
        <FAQ faqs={data.faqs} />
      </main>
      <Footer globalData={data.globalSettings} />

      {/* Single-Page Payment Success Confirmation Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="glass-panel max-w-md w-full rounded-3xl p-8 text-center space-y-6 shadow-2xl border border-emerald-200 relative animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 left-4 p-2 text-slate-400 hover:text-slate-600 font-bold"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center mx-auto text-emerald-600 shadow-xl shadow-emerald-600/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                پرداخت موفق درگاه زیبال
              </span>
              <h2 className="text-2xl font-black text-slate-900">
                اشتراک شما با موفقیت فعال شد! 🎉
              </h2>
              <p className="text-sm text-slate-600">
                {fullName ? `جناب ${fullName}، ` : ''}حساب مربیگری شما در پنل NutriTrain تایید و فعال گردید.
              </p>
            </div>

            <div className="bg-slate-50/90 rounded-2xl p-4 text-right space-y-2 text-xs text-slate-600 border border-slate-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-500">شماره پیگیری زیبال:</span>
                <span className="font-bold text-slate-900 font-mono">{trackId || '--------'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-slate-500">کد ارجاع بانک:</span>
                <span className="font-bold text-slate-900 font-mono">{refNumber || '--------'}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={panelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <UserCheck className="w-5 h-5" />
                <span>ورود مستقیم به پنل مربیان NutriTrain</span>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
