import Reveal from "@/components/ui/Reveal";

const customerLogos = [
  { src: "/images/Linde_plc_logo.png", alt: "Linde plc – ERP-Beratung" },
  { src: "/images/psi.png", alt: "PSI Software AG – IT-Beratung" },
  { src: "/images/kroenert.png", alt: "KROENERT – Industrieprojekt" },
  { src: "/images/rissel.png", alt: "Rolf Rissel – Digitalisierungskonzept" },
];

export default function CustomerLogos() {
  return (
    <section className="section-padding-sm bg-bg-alt border-y border-border">
      <div className="container-wide">
        <Reveal className="text-center mb-10">
          <p className="eyebrow mb-3">Vertrauen aus der Industrie</p>
          <h2 className="text-xl md:text-2xl font-semibold text-text-strong">
            Aus über 10 Jahren Industrie-IT
          </h2>
          <p className="text-text-light text-sm mt-3 max-w-xl mx-auto">
            Auswahl von Unternehmen, für die ich Beratungs- und
            Digitalisierungsprojekte verantwortet habe.
          </p>
        </Reveal>
        <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-6">
          {customerLogos.map((logo) => (
            <div
              key={logo.src}
              className="relative h-10 md:h-12 w-28 md:w-36 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
