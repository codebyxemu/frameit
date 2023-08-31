import { NavigationBar } from '@/app/components/navbar/Navbar'
import Image from 'next/image'
import { HeroSection } from './components/hero/Hero'
import Features from './components/features/Features'
import GetStartedCard from './components/cards/GetStartedCard'
import FooterComponent from './components/footer/Footer'
import BasicStatsCard from './components/stats/BasicStatsCard'

export default function Home() {
  return(
    <main>

    <NavigationBar />
    <HeroSection />
    <Features />
    <GetStartedCard />
    <BasicStatsCard />
    <FooterComponent />

      
    
    </main>
  )
}