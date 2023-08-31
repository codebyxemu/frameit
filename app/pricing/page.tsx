import { NavigationBar } from '@/app/components/navbar/Navbar'
import GetStartedCard from '../components/cards/GetStartedCard'
import PricingCard from '../components/cards/PricingCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'FrameIt - Pricing',
    description: 'See the pricing plans for FrameIt',
  }

export default function PricingPage() {
  return(
    <main>

    <NavigationBar />
    <PricingCard />
    <GetStartedCard />

      
    
    </main>
  )
}