import Image from "next/image";

const customerLogos = [
  { src: "/images/Linde_plc_logo.png", alt: "Linde plc – ERP-Beratung" },
  { src: "/images/psi.png", alt: "PSI Software AG – IT-Beratung" },
  { src: "/images/kroenert.png", alt: "KROENERT – Industrieprojekt" },
  { src: "/images/014_main.jpg", alt: "Industriekunde – Prozessdigitalisierung" },
];

export default function CustomerLogos() {
  return (
    <section className="section-padding bg-bg-alt">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-bold text-text mb-4 text-center">
          Erfahrung aus über 10 Jahren Industrie-IT
        </h2>
        <p className="text-text-light text-center max-w-2xl mx-auto mb-12">
          Auswahl von Unternehmen, für die ich in der Vergangenheit
          IT-Beratungs- und Digitalisierungsprojekte verantwortet habe – u. a.
          im Rahmen meiner Tätigkeit für die PSI Software AG.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {customerLogos.map((logo) => (
            <div
              key={logo.src}
              className="relative h-14 md:h-16 w-32 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain object-center"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
