"use client"
import Category from '@/components/category/Category'
import Filter from '@/components/filter/Filter'
import HeroSection from '@/components/hero/HeroSection'
import BigNftSlider from '@/components/nft/BigNftSlider'
import Services from '@/components/services/Services'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      <Services />
      <BigNftSlider />
      <Filter />
      <Category />
    </main>
  )
}
