import FooterComponent from "@/app/components/footer/Footer";
import { HeroSection } from "@/app/components/hero/Hero";
import { NavigationBar } from "@/app/components/navbar/Navbar";
import BasicStatsCard from "@/app/components/stats/BasicStatsCard";

export default function StatsPage() {
    return (
        <main>
            <NavigationBar />
        <HeroSection />
        <BasicStatsCard />
        <FooterComponent />
            </main>
    )
}