'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ArrowLeft, Sparkles, Zap, ShieldCheck, ChevronDown } from 'lucide-react'

const defaultGalleryImages = [
  '/images/gallery/screen-1.png',
  '/images/gallery/screen-2.png',
  '/images/gallery/screen-3.png',
  '/images/gallery/screen-4.png',
  '/images/gallery/screen-5.png',
  '/images/gallery/screen-6.png',
  '/images/gallery/screen-7.png',
  '/images/gallery/screen-8.png',
]

interface HeroCurvedShowcaseProps {
  heroData?: any
}

export default function HeroCurvedShowcase({ heroData }: HeroCurvedShowcaseProps) {
  const [rotationOffset, setRotationOffset] = useState(0)
  const animRef = useRef<number>(0)
  const lastTimeRef = useRef<number>(0)

  const headlinePrimary = heroData?.headlinePrimary || 'مدیریت هوشمند برنامه تمرینی'
  const headlineGradient = heroData?.headlineGradient || 'و تغذیه‌ای مربیان بدنسازی'
  const subtitle = heroData?.subtitle || 'تنظیم برنامه‌های ورزشی و رژیم غذایی شاگردان با ابزارهای هوش مصنوعی، صدور آنی وب‌اپلیکیشن PWA و پرداخت امن درگاه زیبال.'
  const primaryCta = heroData?.primaryCtaLabel || 'شروع رایگان اشتراک مربی'
  const secondaryCta = heroData?.secondaryCtaLabel || 'بررسی امکانات'
  const athleteUrl = heroData?.athleteImage?.url || '/images/athlete_portrait.png'

  const galleryImages: string[] = heroData?.galleryImages?.length > 0
    ? heroData.galleryImages.map((item: any) => item.image?.url || '')
        .filter((url: string) => url !== '')
    : defaultGalleryImages

  const totalImages = galleryImages.length

  // Continuous smooth rotation via requestAnimationFrame
  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp
    const delta = timestamp - lastTimeRef.current
    lastTimeRef.current = timestamp

    // Faster pace rotation
    const speed = 0.08
    setRotationOffset(prev => (prev + delta * speed * 0.001) % totalImages)

    animRef.current = requestAnimationFrame(animate)
  }, [totalImages])

  useEffect(() => {
    if (totalImages <= 1) return
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [animate, totalImages])

  const getCardTransform = (index: number) => {
    let rawOffset = index - rotationOffset
    let normOffset = rawOffset % totalImages
    if (normOffset > totalImages / 2) normOffset -= totalImages
    if (normOffset < -totalImages / 2) normOffset += totalImages

    const half = totalImages / 2

    // ============================================
    // CONVEX ARC — Edges forward, Center deep back
    // 
    // Center (normOffset=0) → deepest point (far back)
    // Edges (normOffset=±max) → foreground (close to viewer)
    //
    // Like standing inside a curved room looking at
    // the back wall — edges are close, center recedes
    // ============================================

    const spreadX = 220   // tighter horizontal spacing
    const maxDepth = 600  // how deep the center goes back

    const translateX = normOffset * spreadX

    // CENTER = deep back, EDGES = foreground
    // At normOffset=0: translateZ = -maxDepth (deepest)
    // At normOffset=±half: translateZ = 0 (foreground)
    const depthNorm = Math.abs(normOffset) / half // 0 at center, 1 at edges
    const translateZ = -maxDepth * (1 - Math.pow(depthNorm, 0.8))

    // Cards rotate to face the viewer — edges angle inward
    // Negative sign so left cards face right, right cards face left
    const rotateY = -normOffset * 25

    // Slight vertical rise at edges
    const translateY = (1 - depthNorm) * 20

    // Edge cards are larger (foreground), center cards are smaller (background)
    const scale = 0.55 + depthNorm * 0.45
    // NO dimming — all screenshots stay fully visible
    const opacity = 1
    const zIndex = Math.round(depthNorm * 20)

    const visible = Math.abs(normOffset) <= half + 0.5

    return { translateX, translateY, translateZ, rotateY, scale, opacity, zIndex, visible }
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#08090D] text-white overflow-hidden">

      {/* === Dark Background Atmosphere === */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] bg-emerald-500/6 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80rem] h-[20rem] bg-cyan-500/4 rounded-full filter blur-[200px] pointer-events-none" />
      {/* Soft edge vignette only — no center darkening */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_60%,#08090D_100%)] pointer-events-none z-[5]" />

      {/* === Full-Width 3D Gallery Container — Edge to Edge, Pushed Up === */}
      <div
        className="absolute inset-0 flex items-start justify-center pt-2 sm:pt-4 -mt-8"
        style={{ perspective: '1000px', perspectiveOrigin: '50% 40%' }}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {galleryImages.map((imgSrc, index) => {
            const t = getCardTransform(index)
            if (!t.visible) return null

            return (
              <div
                key={index}
                style={{
                  transform: `translateX(${t.translateX}px) translateY(${t.translateY}px) translateZ(${t.translateZ}px) rotateY(${t.rotateY}deg) scale(${t.scale})`,
                  opacity: t.opacity,
                  zIndex: t.zIndex,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                }}
                className="absolute w-48 sm:w-60 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
              >
                <Image
                  src={imgSrc}
                  alt={`NutriTrain App Screenshot ${index + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 288px"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* === Athlete Portrait — Large, Front & Center, Fade at bottom === */}
      <div className="relative flex-1 flex items-end justify-center z-30 pointer-events-none pt-12">
        <div className="relative w-[360px] sm:w-[460px] lg:w-[540px] h-[460px] sm:h-[560px] lg:h-[640px] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] -mb-10 sm:-mb-14">
          <Image
            src={athleteUrl}
            alt="NutriTrain Athlete"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_0_80px_rgba(16,185,129,0.12)]"
          />
        </div>
        {/* Floor glow */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-emerald-500/8 rounded-full filter blur-[50px] pointer-events-none" />
      </div>

      {/* === Bottom Content Overlay === */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14 lg:pb-16 -mt-16 sm:-mt-24 lg:-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-end">

          <div className="md:col-span-7 space-y-5 flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center gap-2 text-emerald-400 text-[11px] font-en font-extrabold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>NUTRITRAIN — NEXT-GEN COACHING PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-heading font-black text-white leading-[1.2] tracking-tight">
              {headlinePrimary}
              <br />
              <span className="text-gradient-emerald">{headlineGradient}</span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <a
                href="#pricing"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-emerald-400 hover:text-slate-950 transition-all shadow-xl shadow-white/10"
              >
                <span>{primaryCta}</span>
                <ArrowLeft className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-white/80 font-bold text-sm hover:bg-white/10 hover:text-white transition-all"
              >
                <span>{secondaryCta}</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4 flex flex-col items-center text-center pt-5 md:pt-0 md:pr-8">
            <p className="text-[13px] text-white/50 leading-relaxed font-medium italic">
              &ldquo;{subtitle}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-5 text-[11px] text-white/60 font-bold pt-1">
              <div className="flex items-center gap-1.5 text-emerald-400/80">
                <Zap className="w-3.5 h-3.5" />
                <span>فعال‌سازی آنی</span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-400/80">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>درگاه امن زیبال</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bounce scroll down arrow visible in first frame */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
        <a href="#features" className="flex items-center justify-center w-12 h-12 rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>

    </section>
  )
}
