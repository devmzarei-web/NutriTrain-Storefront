'use client'

import { Dumbbell, ShieldCheck, Sparkles, TrendingUp, Utensils, Users, Zap } from 'lucide-react'
import { toFarsiDigits } from '@/lib/utils'

interface FeaturesProps {
  features?: any[]
}

const defaultFeatures = [
  {
    title: 'تنظیم هوشمند برنامه‌های تمرینی',
    description: `بانک جامع بیش از ${toFarsiDigits('۲۰۰۰')} حرکت استاندارد بدنسازی همراه با ویدیوهای آموزشی و پیشنهاد هوشمند سیستم مربیگری.`,
    icon: 'Dumbbell',
    badge: 'AI Powered',
  },
  {
    title: 'محاسبه دقیق سیستم تغذیه و رژیم',
    description: 'تنظیم کالری، درشت‌مغذی‌ها (پروتئین، کربوهیدرات، چربی) و ریزمغذی‌ها بر اساس هدف دقیق ورزشکار.',
    icon: 'Utensils',
    badge: 'دقت بالا',
  },
  {
    title: 'ارسال برنامه‌ها در قالب Web App اختصاصی',
    description: 'ارسال مستقیم برنامه به شاگردان با لینک اختصاصی بدون نیاز به نصب فایل‌های سنگین، همراه با چک‌لیست روزانه.',
    icon: 'Zap',
    badge: 'PWA Express',
  },
  {
    title: 'مدیریت شاگردان و تمدید اشتراک',
    description: 'مشاهده گزارش پیشرفت، تغییرات وزن، عکس‌های قبل و بعد و یادآوری خودکار تاریخ تمدید برنامه.',
    icon: 'Users',
    badge: 'CRM مربی',
  },
  {
    title: 'آنالیز نمودار پیشرفت ورزشکاران',
    description: 'نمودارهای هوشمند ردیابی شاخص‌های بدنی، رکوردها و پایبندی شاگردان به تمرینات روزانه.',
    icon: 'TrendingUp',
    badge: 'گزارش‌گیری',
  },
  {
    title: 'برندینگ اختصاصی و لینک پرداخت مستورد',
    description: 'صفحه اختصاصی مربی با لوگو و نام شخصی و اتصال به درگاه زیبال جهت ثبت‌نام و فعال‌سازی آنی حساب.',
    icon: 'ShieldCheck',
    badge: 'امکانات ویژه',
  },
]

export default function Features({ features = defaultFeatures }: FeaturesProps) {
  const displayFeatures = features.length > 0 ? features : defaultFeatures

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-emerald-600" />
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-emerald-600" />
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-600" />
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />
      default:
        return <Sparkles className="w-6 h-6 text-emerald-600" />
    }
  }

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 gsap-reveal">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            امکانات پیشرفته مربیگری NutriTrain
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 leading-tight">
            تمام ابزارهایی که یک مربی حرفه‌ای <br className="hidden sm:inline" />
            برای <span className="text-gradient-emerald">رشد {toFarsiDigits('۱۰')} برابری</span> نیاز دارد
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            صرفه‌جویی در ساعت‌ها وقت برای تنظیم برنامه و ارائه تجربه فوق‌العاده مدرن به ورزشکاران.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((item: any, idx: number) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-8 flex flex-col justify-between space-y-6 border border-slate-200/80 hover:border-emerald-500/40 gsap-reveal"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm">
                    {getIconComponent(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-en text-xs font-bold">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-heading font-black text-slate-900">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {toFarsiDigits(item.description)}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 cursor-pointer">
                <span>توضیحات بیشتر</span>
                <span className="mr-1">←</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
