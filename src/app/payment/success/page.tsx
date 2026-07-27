import { CheckCircle2, Dumbbell, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ trackId?: string; refNumber?: string; fullName?: string; email?: string }>
}) {
  const params = await searchParams
  const trackId = params.trackId || '-------'
  const refNumber = params.refNumber || '-------'
  const fullName = params.fullName || 'مربی گرامی'
  const email = params.email || ''

  const panelUrl = process.env.NUTRI_PANEL_URL || 'https://panel.nutritrain.ir'

  return (
    <div className="min-h-screen bg-[#FAFCFF] flex items-center justify-center p-4 sm:p-6" dir="rtl">
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 text-center space-y-6 shadow-2xl border border-emerald-200">
        
        <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-white flex items-center justify-center mx-auto text-emerald-600 shadow-xl shadow-emerald-600/20">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
            پرداخت موفق درگاه زیبال
          </span>
          <h1 className="text-2xl font-black text-slate-900">
            اشتراک شما با موفقیت فعال شد! 🎉
          </h1>
          <p className="text-sm text-slate-600">
            جناب <span className="font-bold text-slate-900">{fullName}</span>، حساب مربیگری شما در پنل NutriTrain تایید و فعال گردید.
          </p>
        </div>

        {/* Transaction Details Box */}
        <div className="bg-slate-50/90 rounded-2xl p-4 text-right space-y-2 text-xs text-slate-600 border border-slate-200">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-500">شماره پیگیری زیبال:</span>
            <span className="font-bold text-slate-900 font-mono">{trackId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-slate-500">کد ارجاع بانک:</span>
            <span className="font-bold text-slate-900 font-mono">{refNumber}</span>
          </div>
          {email && (
            <div className="flex justify-between items-center pt-1 border-t border-slate-200">
              <span className="font-semibold text-slate-500">ایمیل ثبت‌شده:</span>
              <span className="font-medium text-slate-800">{email}</span>
            </div>
          )}
        </div>

        {/* Panel Action Button */}
        <div className="pt-2 space-y-3">
          <a
            href={panelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <UserCheck className="w-5 h-5" />
            <span>ورود مستقیم به پنل مربیان NutriTrain</span>
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          <Link
            href="/"
            className="block text-xs font-semibold text-slate-500 hover:text-slate-700 transition-colors"
          >
            بازگشت به صفحه اصلی فروشگاه
          </Link>
        </div>

      </div>
    </div>
  )
}
