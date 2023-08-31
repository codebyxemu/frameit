import { NavigationBar } from '@/app/components/navbar/Navbar'
import GetStartedCard from '@/app/components/cards/GetStartedCard'
import PricingCard from '@/app/components/cards/PricingCard'
import { Metadata } from 'next'
import AboutPage from '../about/page'
import AboutMainCard from '@/app/components/about/AboutMainCard'

export const metadata: Metadata = {
    title: 'FrameIt - Pricing',
    description: 'See the pricing plans for FrameIt',
  }

export default function PricingPage() {
  return(
    <main>

    <NavigationBar />
    <AboutMainCard />
    <PricingCard />
    <GetStartedCard />

      
    
    </main>
  )
}