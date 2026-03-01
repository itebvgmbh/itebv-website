import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyMe from "@/components/sections/WhyMe";
import Process from "@/components/sections/Process";
import References from "@/components/sections/References";
import AboutMe from "@/components/sections/AboutMe";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyMe />
      <Process />
      <References />
      <AboutMe />
      <Contact />
    </>
  );
}
