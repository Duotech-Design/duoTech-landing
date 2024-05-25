import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import GenericButton from "./ui/Buttons/GenericButton";

export const Contacto = () => {
  return (
    <section id="contacto" className="container py-24 sm:py-32">
      <div className="flex flex-col items-center justify-center mt-6">
        <p className="text-sm">SI BUSCAS ALGO ...</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">NUEVO</h2>
        <p className="text-sm">EMPECEMOS A</p>
      </div>
      <div>
        <h3 className="font-medium mt-4">MONTERREY, MX.</h3>
        <h3 className="font-medium mt-4">
          CURRENTLY:
          <a
            href="#"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            OFF - DUTY
          </a>
        </h3>
      </div>
    </section>
  );
};
