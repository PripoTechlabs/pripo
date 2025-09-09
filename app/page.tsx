import { HeroSection } from "@/components/hero-section-4";
import AboutSection from "@/components/about-section";
import { ModernMissionVision } from "@/components/modern-mission-vision";
import WhyChooseSection from "@/components/why-choose-section";
import { ModernServiceSection } from "@/components/modern-services-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

import { Github, Twitter } from "lucide-react"
import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <ModernMissionVision />
      <WhyChooseSection />
      <ModernServiceSection />
      <ContactSection />
      <Footer
        logo={<Logo />}
        brandName="Techlabs"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        copyright={{
          text: "© 2025 Pripo Techlabs",
          license: "All rights reserved",
        }}
      />
    </div>
  );
}

