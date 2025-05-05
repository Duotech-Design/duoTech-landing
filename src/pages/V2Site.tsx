import { Footer } from "@/v2/components/footer/footer";
import { Navbar } from "@/v2/components/navbar/Navbar";
import { ContactSection } from "@/v2/components/sections/Contact";
import { MobileAppsSection } from "@/v2/components/sections/MobileApps";
import { PortfolioTable } from "@/v2/components/sections/PortafolioTable";
import { WebPresence } from "@/v2/components/sections/WebPresence";
import { AboutDuoTech } from "@/v2/components/subsections/AboutDuoTech";
import { CtaIdeaSection } from "@/v2/components/subsections/CtaIdeaSection";
import { HeroSection } from "@/v2/components/subsections/HeroSection";
import { ServicesSection } from "@/v2/components/subsections/ServicesSection";
import { ServicesSectionOption } from "@/v2/components/subsections/ServicesSectionOption";

export const V2Site: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#e5dfd5] font-sans text-[#21260D]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ServicesSectionOption />
        <AboutDuoTech />
        <CtaIdeaSection />
        <WebPresence />
        <MobileAppsSection />
        <PortfolioTable />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
