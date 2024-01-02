import OurClients from "@/components/OurClients/OurClients";
import Hero from "@/components/HeroSection/Hero";
import Menu from "@/components/Menu/Menu";
import ManageSection from "@/components/ManageSection/Manage";

export default function Home() {
  return (
    <div>
      <Menu />
      <Hero />
      <OurClients />
      <ManageSection />
    </div>
  )
}
