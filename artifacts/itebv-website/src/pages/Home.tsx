import Hero from "@/components/sections/Hero";
import CustomerLogos from "@/components/sections/CustomerLogos";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyMe from "@/components/sections/WhyMe";
import References from "@/components/sections/References";
import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import WordmarkBand from "@/components/sections/WordmarkBand";
import { useSeo } from "@/hooks/useSeo";
import { siteConfig } from "@/lib/config";

export default function HomePage() {
  useSeo({
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    path: "/",
  });
  return (
    <>
      <Hero />
      <CustomerLogos />
      <Services />
      <Industries />
      <Process />
      <WhyMe />
      <References />
      <AboutMe />
      <FAQ />
      <Contact />
      <WordmarkBand />
    </>
  );
}
