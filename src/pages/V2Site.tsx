import { Footer } from "@/v2/components/footer/footer";
import { Navbar } from "@/v2/components/navbar/Navbar";
import { HeroSection } from "@/v2/components/subsections/HeroSection";
import { ServicesSection } from "@/v2/components/subsections/ServicesSection";
import { WebPresenceDetails } from "@/v2/components/subsections/WebPreseceDetails";
import { WebPresenceIntro } from "@/v2/components/subsections/WebPresenceSection";

export const V2Site: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#e5dfd5] font-sans text-[#21260D]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <WebPresenceIntro />
        <WebPresenceDetails />
      </main>
      <Footer />
    </div>
  );
};
