import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyMe from "@/components/sections/WhyMe";
import Process from "@/components/sections/Process";
import References from "@/components/sections/References";
import CustomerLogos from "@/components/sections/CustomerLogos";
import AboutMe from "@/components/sections/AboutMe";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
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
      <Services />
      <Industries />
      <WhyMe />
      <Process />
      <References />
      <CustomerLogos />
      <AboutMe />
      <FAQ />
      <Contact />
    </>
  );
}
