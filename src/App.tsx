import { About } from "./components/About";
import { Cta } from "./components/Cta";
//import { FAQ } from "./components/Contacto";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Sponsors } from "./components/Sponsors";
import { Team } from "./components/Team";
import { Portafolio } from "./components/Portafolio";
import "./App.css";
import { Contacto } from "./components/Contacto";
import Cotiza from "./components/Cotizacion";
import { Us } from "./components/Us";
import { ServiciosCards } from "./components/ServiciosCards";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Us/>
      {/*<HowItWorks /> */ }
      <Servicios />
      <ServiciosCards/>
      <Proyectos />
      <Services />
      {/*
      <Portafolio />
      <Sponsors />
     
      <Cta />
    */ }
     {/* <Team />*/ }
     
       {/*<Newsletter />*/ }
      < Cotiza />
      <Contacto />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
