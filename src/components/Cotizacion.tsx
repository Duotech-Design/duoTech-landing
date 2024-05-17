
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface CotizacionProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: CotizacionProps[] = [
  {
    title: "One page website",
    popular: 0,
    price: 0,
    description:
      "Una pag. con efecto parallax. Solución web eficiente que condensa toda la información esencial de tu negocio en una única página, ideal para proyectos y promociones puntuales, ofreciendo una experiencia de navegación directa y concisa para tus visitantes.",
    buttonText: "Get Started",
    benefitList: [
        
      "Propuesta de diseño.",
      " Diseño responsivo (Desktop, tablet y mobile).",
      "Hasta 4 paginas",
      "Formulario de contacto personalizado.",
      "Secciones personalizadas.",
    "Links a redes sociales",
      " Links de Whatsapp.",
      "Codigo QR de tu pag,"
    ],
  },
  {
    title: "Landing Page",
    popular: 1,
    price: 5,
    description:
      "Diseño web enfocado en captar la atención y convertir visitantes en clientes potenciales, optimizando la experiencia del usuario y destacando la propuesta de valor de tu negocio en una sola página.",
    buttonText: "Start Free Trial",
    benefitList: [
      "  Pag. con 10 secciones.",
      "Propuesta de diseño.",
     
      " Diseño responsivo (Desktop, tablet y mobile).",
      "Formulario de contacto personalizado. ",
      "Secciones personalizadas ",
      "Links a redes sociales",
      " Links de Whatsapp.",
      "Codigo QR de tu pag,"
    ],
  },
  {
    title: "Enterprise",
    popular: 0,
    price: 40,
    description:
      "Lorem ipsum dolor sit, amet ipsum consectetur adipisicing elit.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];
const Cotiza = () => {


  return (
    <>
    <section
      id="cotiza"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          EMPECEMOS {" "}
        </span>
       A CONSTRUIR UN NEGOCIO QUE IMPACTE 
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      CONTACTÁNOS  
      </h3>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
      Con tantos diseñadores y estudios para elegir, te encuentras ante un dilema de opciones. Elegir uno es difícil, seleccionar el adecuado es aún más complicado. Queremos asegurarnos de que tomes la decisión correcta desde el principio.


Contáctanos hoy mismo, conoce al equipo y veamos si somos la opción ideal para lo que quieres hacer y a dónde quieres llegar.      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: CotizacionProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">${pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    {/* NO CAMBIO EL COLOR   */}
                    <Check className="text-#879EAD" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
    </section>
    <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                Nombre completo 
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Email 
              </label>
              <input
                id="password"
                type="password"
                placeholder="******************"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Teléfono  
              </label>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje   
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
     
    </>
  );
};

export default Cotiza;