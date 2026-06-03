import Reveal from "@/components/ui/Reveal";

const customerLogos = [
  { src: "/images/Linde_plc_logo.png", alt: "Linde plc – ERP-Beratung" },
  { src: "/images/psi.png", alt: "PSI Software AG – IT-Beratung" },
  { src: "/images/kroenert.png", alt: "KROENERT – Industrieprojekt" },
  { src: "/images/014_main.jpg", alt: "Industriekunde – Prozessdigitalisierung" },
];

export default function CustomerLogos() {
  return (
    <section className="border-y border-line bg-bg">
      <div className="container-editorial py-12 md:py-16">
        <Reveal className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <p className="max-w-md text-sm leading-relaxed text-text-light">
            <span className="font-display text-base text-ink">
              Über 10 Jahre Industrie-IT.
            </span>{" "}
            Auswahl von Unternehmen, für die ich Beratungs- und
            Digitalisierungsprojekte verantwortet habe.
          </p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-8 sm:gap-x-14">
            {customerLogos.map((logo) => (
              <li
                key={logo.src}
                className="relative h-9 w-24 md:h-10 md:w-28 grayscale opacity-65 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="absolute inset-0 h-full w-full object-contain object-center"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
