'use client'

import React, { useState } from 'react'
import { Activity, Dumbbell, ShieldCheck, Sparkles, TrendingUp, Users, Zap, CheckCircle } from 'lucide-react'

interface SplineSceneProps {
  sceneUrl?: string
}

export default function SplineScene({ sceneUrl }: SplineSceneProps) {
  const [activeTab, setActiveTab] = useState<'workout' | 'nutrition' | 'analytics'>('workout')
  const [transformStyle, setTransformStyle] = useState('')

  // Interactive 3D Perspective Tilt on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const rotateX = (-y / rect.height) * 14
    const rotateY = (x / rect.width) * 14
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
      className="relative w-full h-[480px] lg:h-[560px] rounded-3xl overflow-hidden glass-card p-6 flex flex-col justify-between shadow-2xl border border-emerald-500/20"
    >
      {/* Background Animated Gradient Orbs */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-emerald-400/20 rounded-full filter blur-2xl animate-pulse pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-400/20 rounded-full filter blur-2xl animate-pulse pointer-events-none" />

      {/* Floating Header Badges */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-emerald-300/80 shadow-md">
          <Sparkles className="w-4 h-4 text-emerald-600 animate-spin" />
          <span className="text-xs font-bold text-slate-800">هوش مصنوعی NutriTrain</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-panel border border-teal-300/80 shadow-md">
          <Zap className="w-4 h-4 text-teal-600" />
          <span className="text-xs font-bold text-slate-800">صدور آنی Web App</span>
        </div>
      </div>

      {/* Interactive Tab Controls */}
      <div className="z-10 my-auto w-full max-w-md mx-auto space-y-4">
        {/* Tab Selector */}
        <div className="flex items-center justify-center p-1.5 rounded-2xl bg-slate-100/90 backdrop-blur-md border border-slate-200/80">
          <button
            onClick={() => setActiveTab('workout')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'workout'
                ? 'bg-white text-emerald-700 shadow-md border border-emerald-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5" />
            <span>برنامه تمرین</span>
          </button>

          <button
            onClick={() => setActiveTab('nutrition')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'nutrition'
                ? 'bg-white text-emerald-700 shadow-md border border-emerald-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>رژیم تغذیه</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'analytics'
                ? 'bg-white text-emerald-700 shadow-md border border-emerald-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>آنالیز پیشرفت</span>
          </button>
        </div>

        {/* Dynamic Card Content */}
        <div className="glass-panel rounded-3xl p-6 shadow-xl border border-white/90 space-y-4 transition-all duration-300">
          {activeTab === 'workout' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-900 font-heading">تمرینات روز اول - سینه و جلوبازو</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  پیشنهاد هوشمند
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 border border-slate-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">پرس سینه هالتر روی نیمکت</h5>
                  <p className="text-[10px] text-slate-500">استراحت بین ست: ۹۰ ثانیه</p>
                </div>
                <span className="text-xs font-extrabold text-emerald-600 font-mono">۴ ست × ۱۰</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/80 border border-slate-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-slate-900">قفسه سینه دمبل فلای</h5>
                  <p className="text-[10px] text-slate-500">تمرکز بر کشش عضله</p>
                </div>
                <span className="text-xs font-extrabold text-teal-600 font-mono">۳ ست × ۱۲</span>
              </div>
            </div>
          )}

          {activeTab === 'nutrition' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-900 font-heading">هدف تغذیه‌ای: افزایش حجم خشک</span>
                <span className="text-xs font-extrabold text-emerald-600">۲,۸۵۰ کالری</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-2xl bg-emerald-50/80 border border-emerald-100">
                  <span className="text-[10px] text-slate-500 block">پروتئین</span>
                  <span className="text-xs font-bold text-emerald-700">۱۸۰ گرم</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-teal-50/80 border border-teal-100">
                  <span className="text-[10px] text-slate-500 block">کربوهیدرات</span>
                  <span className="text-xs font-bold text-teal-700">۳۲۰ گرم</span>
                </div>
                <div className="p-2.5 rounded-2xl bg-cyan-50/80 border border-cyan-100">
                  <span className="text-[10px] text-slate-500 block">چربی مفيد</span>
                  <span className="text-xs font-bold text-cyan-700">۶۵ گرم</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-slate-900 font-heading">نرخ پایبندی ورزشکار</span>
                <span className="text-xs font-extrabold text-emerald-600">۹۴٪ (عالی)</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[94%] rounded-full animate-pulse" />
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-600 pt-1">
                <span>تمرینات انجام‌شده: ۲۸ از ۳۰</span>
                <span className="font-bold text-emerald-600">تایید نهایی مربی ✓</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Bottom Status Bar */}
      <div className="z-10 flex items-center justify-between pt-2 border-t border-slate-100/80 text-xs font-semibold text-slate-600">
        <div className="flex items-center gap-1.5 text-emerald-600">
          <CheckCircle className="w-4 h-4" />
          <span className="font-heading">آماده اتصال به پنل مربیان</span>
        </div>
        <div className="flex items-center gap-1 text-slate-500">
          <Users className="w-3.5 h-3.5 text-slate-400" />
          <span>+۵,۰۰۰ برنامه فعال</span>
        </div>
      </div>
    </div>
  )
}
