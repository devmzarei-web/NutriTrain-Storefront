'use client'

import HeroCurvedShowcase from './HeroCurvedShowcase'

interface HeroProps {
  heroData?: any
}

export default function Hero({ heroData }: HeroProps) {
  return <HeroCurvedShowcase heroData={heroData} />
}
