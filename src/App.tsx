import { About } from "./components/About";
//import { FAQ } from "./components/Contacto";
import { Servicios } from "./components/Servicios";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";
import { Contacto } from "./components/Contacto";
//import { Cotiza } from "./components/Cotiza";
import { Us } from "./components/Us";
import { ServiciosCards } from "./components/ServiciosCards";
import { Proyectos } from "./components/Proyectos";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Us />
      {/*<HowItWorks /> */}
      <Servicios />
      <div id="a"></div>
      <ServiciosCards />
      <div id="b"></div>
      <Proyectos />
      <div id="c"></div>
       {/*
      <Cotiza />
     
      <Services />
      
      <Portafolio />
      <Sponsors />
     
      <Cta />
    */}
      {/* <Team />*/}

      {/*<Newsletter />*/}

      <Contacto />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
