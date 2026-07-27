'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { toFarsiDigits } from '@/lib/utils'

interface FAQProps {
  faqs?: any[]
}

const defaultFaqs = [
  {
    question: 'آیا فعال‌سازی حساب مربی پس از پرداخت بلافاصله انجام می‌شود؟',
    answer: 'بله، پس از تکمیل پرداخت در درگاه زیبال، حساب مربیگری شما به طور خودکار فعال شده و لینک ورود مستقیم به پنل ارشد برای شما ارسال می‌شود.',
  },
  {
    question: 'شاگردان چگونه برنامه‌ها را دریافت می‌کنند؟',
    answer: 'شما می‌توانید برای هر شاگرد یک لینک وب‌اپلیکیشن (PWA) اختصاصی صادر کنید. شاگردان بدون نیاز به دانلود از استور، برنامه را در گوشی همراه خود ذخیره می‌کنند.',
  },
  {
    question: 'آیا امکان تغییر پلن اشتراک وجود دارد؟',
    answer: 'بله، هر زمان که تعداد شاگردان شما افزایش یابد می‌توانید با پرداخت مابه‌التفاوت پلن خود را به Pro یا آکادمی ارتقا دهید.',
  },
  {
    question: 'درگاه زیبال چگونه تراکنش‌ها را تایید می‌کند؟',
    answer: 'تراکنش‌ها از طریق استانداردهای امنیتی بانک مرکزی و پروتکل SSL درگاه زیبال استعلام و به صورت امن ثبت می‌گردند.',
  },
]

export default function FAQ({ faqs = defaultFaqs }: FAQProps) {
  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faqs" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            سوالات متداول
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
            پاسخ به سوالات شما درباره <span className="text-gradient-emerald">NutriTrain</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {displayFaqs.map((faq: any, idx: number) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 transition-all gsap-reveal"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-right flex items-center justify-between gap-4 font-heading font-bold text-slate-900 text-base sm:text-lg hover:text-emerald-600 transition-colors"
                >
                  <span>{toFarsiDigits(faq.question)}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-600 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {toFarsiDigits(faq.answer)}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
