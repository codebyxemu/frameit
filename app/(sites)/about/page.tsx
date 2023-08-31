import AboutMainCard from "@/app/components/about/AboutMainCard";
import FooterComponent from "@/app/components/footer/Footer";
import { NavigationBar } from "@/app/components/navbar/Navbar";

export default function AboutPage() {
    return (
        <main>
            <NavigationBar />
            <AboutMainCard />
            <FooterComponent />
        </main>
    )
}