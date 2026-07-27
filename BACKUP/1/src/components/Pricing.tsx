'use client'

import { useState } from 'react'
import { Check, CreditCard, Sparkles, User, Mail, Phone, Loader2 } from 'lucide-react'
import { toFarsiDigits } from '@/lib/utils'

interface PricingProps {
  pricingTiers?: any[]
}

const defaultTiers = [
  {
    title: 'اشتراک پایه مربی',
    tierId: 'starter_monthly',
    priceToman: 490000,
    billingPeriod: 'ماهانه',
    description: `مناسب برای مربیانی که تازه کار خود را شروع کرده‌اند و تا ${toFarsiDigits('۲۰')} شاگرد فعال دارند.`,
    featuresList: [
      { text: `مدیریت تا ${toFarsiDigits('۲۰')} شاگرد فعال` },
      { text: 'دسترسی کامل به بانک ویدیوهای حركات' },
      { text: 'صدور برنامه‌های PWA و PDF' },
      { text: 'پشتیبانی تیکتی' },
    ],
    isPopular: false,
    ctaText: 'انتخاب پلن پایه',
  },
  {
    title: 'اشتراک حرفه‌ای Pro',
    tierId: 'pro_monthly',
    priceToman: 890000,
    billingPeriod: 'ماهانه',
    description: `بهترین گزینه برای مربیان باسابقه و باشگاه‌های پرمخاطب (تا ${toFarsiDigits('۱۰۰')} شاگرد).`,
    featuresList: [
      { text: `مدیریت تا ${toFarsiDigits('۱۰۰')} شاگرد فعال` },
      { text: 'پیشنهاددهنده هوش مصنوعی رژیم و تمرین' },
      { text: 'برندینگ اختصاصی مربی (لوگو و عنوان)' },
      { text: 'ارسال پیامک یادآوری تمدید به شاگردان' },
      { text: 'پشتیبانی تلفنی و واتس‌اپ اختصاصی' },
    ],
    isPopular: true,
    ctaText: 'انتخاب پلن Pro (پیشنهاد ویژه)',
  },
  {
    title: 'اشتراک VIP / آکادمی',
    tierId: 'agency_yearly',
    priceToman: 1990000,
    billingPeriod: 'ماهانه',
    description: 'برای آکادمی‌های ورزشی، مربیان مطرح و تیم‌های مربیگری چندنفره.',
    featuresList: [
      { text: 'نامحدود شاگرد فعال' },
      { text: 'امکان تعریف همکار و کمک‌مربی' },
      { text: 'دامین اختصاصی و برندینگ کامل' },
      { text: 'اتصال مستقیم به API و درگاه اختصاصی' },
      { text: `پشتیبانی ${toFarsiDigits('۲۴')} ساعته VIP` },
    ],
    isPopular: false,
    ctaText: 'سفارش پلن آکادمی',
  },
]

export default function Pricing({ pricingTiers = defaultTiers }: PricingProps) {
  const displayTiers = pricingTiers.length > 0 ? pricingTiers : defaultTiers

  const [selectedTier, setSelectedTier] = useState<any>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleOpenCheckout = (tier: any) => {
    setSelectedTier(tier)
    setErrorMessage('')
    setModalOpen(true)
  }

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const res = await fetch('/api/payment/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tierId: selectedTier.tierId || 'pro_monthly',
          amount: selectedTier.priceToman || 890000,
          fullName,
          email,
          phone,
        }),
      })

      const data = await res.json()

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl
      } else {
        setErrorMessage(data.error || 'خطا در ایجاد تراکنش درگاه زیبال')
      }
    } catch (err: any) {
      setErrorMessage('ارتباط با سرور برقرار نشد.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            تعرفه‌های شفاف و منصفانه
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
            پلن مناسب برای <span className="text-gradient-emerald">رشد کسب‌وکار مربیگری</span> شما
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            بدون هیچ هزینه پنهان. فعال‌سازی آنی حساب پنل مربیان بلافاصله پس از پرداخت موفق.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {displayTiers.map((tier: any, idx: number) => {
            const isFeatured = tier.isPopular
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 gsap-reveal ${
                  isFeatured
                    ? 'glass-panel border-2 border-emerald-500 shadow-2xl shadow-emerald-600/20 scale-105 z-10'
                    : 'glass-card border border-slate-200/90'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 right-1/2 translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold shadow-md">
                    محبوب‌ترین انتخاب مربیان 🔥
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-black text-slate-900 mb-2">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {toFarsiDigits(tier.description)}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2 py-4 border-y border-slate-100">
                    <span className="text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
                      {toFarsiDigits(Number(tier.priceToman).toLocaleString('fa-IR'))}
                    </span>
                    <span className="text-xs font-bold text-slate-500">تومان / {tier.billingPeriod || 'ماهانه'}</span>
                  </div>

                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-700 block">امکانات شامل شده:</span>
                    {tier.featuresList?.map((feat: any, fIdx: number) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{toFarsiDigits(feat.text)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={() => handleOpenCheckout(tier)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm transition-all shadow-md ${
                      isFeatured
                        ? 'btn-glow bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    {tier.ctaText || 'ثبت سفارش و فعال‌سازی'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Checkout Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl border border-emerald-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-heading font-black text-slate-900">اطلاعات مربی و اتصال به درگاه زیبال</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1">
                  پلن انتخابی: {selectedTier?.title} ({toFarsiDigits(Number(selectedTier?.priceToman).toLocaleString('fa-IR'))} تومان)
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-2"
              >
                ✕
              </button>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">نام و نام خانوادگی مربی</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="مثلا: علی رضایی"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">شماره موبایل (تایید حساب)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder={toFarsiDigits('۰۹۱۲۳۴۵۶۷۸۹')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">ایمیل مربی</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="trainer@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500 font-en"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all mt-4"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>در حال انتقال به درگاه پرداخت...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    <span>انتقال به درگاه امن زیبال</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
