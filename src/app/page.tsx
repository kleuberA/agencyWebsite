import OurClients from "@/components/OurClients/OurClients";
import Hero from "@/components/HeroSection/Hero";
import Menu from "@/components/Menu/Menu";
import ManageSection from "@/components/ManageSection/Manage";
import Pixel from "@/components/PixelGrade/Pixel";
import Helping from "@/components/Helping/Helping";
import Did from "@/components/DidSection/Did";
import Footer from "@/components/Footer/Footer";
import Demo from "@/components/GetDemo/Demo";
import Caring from "@/components/Caring/Caring";
import Meet from "@/components/MeetCustomers/Meet";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Menu />
      <Hero />
      <OurClients />
      <ManageSection />
      <Pixel />
      <Helping />
      <Did />
      <Meet />
      <Caring />
      <Demo />
      <Footer />
    </div>
  )
}
