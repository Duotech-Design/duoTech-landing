import { About } from "./components/About";
import { Cta } from "./components/Cta";
//import { FAQ } from "./components/Contacto";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { Cotizacion } from "./components/Cotizacion";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Portafolio } from "./components/Portafolio";
import "./App.css";
import { Contacto } from "./components/Contacto";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Servicios />
      <Services />
      <Cta />
      <Portafolio />
      <Team />
     
      <Newsletter />
      <Cotizacion />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
