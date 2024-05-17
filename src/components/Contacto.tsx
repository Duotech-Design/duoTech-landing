import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ContactoProps {
  question: string;
  answer: string;
  value: string;
}

const ContactoList: ContactoProps[] = [
  {
    question: "Is this template free?",
    answer: "Yes. It is a free ChadcnUI template.",
    value: "item-1",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-2",
  },
  {
    question:
      "Lorem ipsum dolor sit amet  Consectetur natus dolores minus quibusdam?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui nostrum reiciendis veritatis necessitatibus maxime quis ipsa vitae cumque quo?",
    value: "item-3",
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit?",
    answer: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    value: "item-4",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur natus?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint labore quidem quam? Consectetur sapiente iste rerum reiciendis animi nihil nostrum sit quo, modi quod.",
    value: "item-5",
  },
];

export const Contacto = () => {
  return (
    <section
      id="contacto"
      className="container py-24 sm:py-32"
    >
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        otro texto parecido con animacion {" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Contactanos
        </span>
      </h2>

      
      <h3 className="font-medium mt-4">
       MONTERREY, MX. 
      
      </h3>
      <h3 className="font-medium mt-4">
       CURRENTLY: 
        <a
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          OFF - DUTY 
        </a>
      </h3>
    </section>
  );
};
