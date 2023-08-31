import { NavigationBar } from '@/app/components/navbar/Navbar'
import Image from 'next/image'
import { HeroSection } from './components/hero/Hero'
import Features from './components/features/Features'

export default function Home() {
  return(
    <main>
      <div className="pattern-wavy pattern-blue-500 pattern-bg-white 
  pattern-size-2 pattern-opacity-10">
      <NavigationBar />
      <HeroSection />
      <Features />
      </div>
    </main>
  )
}