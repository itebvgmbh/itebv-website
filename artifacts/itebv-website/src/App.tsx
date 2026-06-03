import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import { getLocalBusinessJsonLd } from "@/lib/structured-data";
import HomePage from "@/pages/Home";
import AnalysePage from "@/pages/Analyse";
import SoftwarePage from "@/pages/Software";
import KiLoesungenPage from "@/pages/KiLoesungen";
import ImpressumPage from "@/pages/Impressum";
import DatenschutzPage from "@/pages/Datenschutz";
import NotFound from "@/pages/NotFound";

function ScrollToHashOnNav() {
  const [location] = useLocation();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [location]);
  return null;
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/analyse" component={AnalysePage} />
      <Route path="/software" component={SoftwarePage} />
      <Route path="/ki-loesungen" component={KiLoesungenPage} />
      <Route path="/impressum" component={ImpressumPage} />
      <Route path="/datenschutz" component={DatenschutzPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <ScrollToHashOnNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessJsonLd()) }}
      />
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Zum Inhalt springen
      </a>
      <Header />
      <main id="hauptinhalt" className="pt-16 md:pt-20 pb-16 md:pb-0">
        <Routes />
      </main>
      <Footer />
      <ChatWidget />
      <MobileStickyCTA />
    </WouterRouter>
  );
}

export default App;
