import { NavigationBar } from '@/app/components/navbar/Navbar'
import Image from 'next/image'
import { HeroSection } from './components/hero/Hero'
import Features from './components/features/Features'
import GetStartedCard from './components/cards/GetStartedCard'

export default function Home() {
  return(
    <main>

    <NavigationBar />
    <HeroSection />
    <Features />
    <GetStartedCard />

      
    
    </main>
  )
}