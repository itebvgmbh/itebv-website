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

export default function HomePage() {
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
