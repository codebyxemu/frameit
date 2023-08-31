import { NavigationBar } from '@/app/components/Navbar'
import Image from 'next/image'
import { HeroSection } from './components/Hero'

export default function Home() {
  return(
    <main>
      <NavigationBar />
      <HeroSection />
    </main>
  )
}