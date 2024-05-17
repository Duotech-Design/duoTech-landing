
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GenericButton3 from "../components/ui/Buttons/GenericButton3" ;

interface PortafolioProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: PortafolioProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
];

export const Portafolio = () => {
  return (
    <section
      id="portafolio"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
       Proyectos 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
       
        </span>
        
      </h2>

     

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: PortafolioProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
      <p className="text-xl text-muted-foreground pt-4 pb-8">
        WE ONE 
      </p>
      <p className="text-xl text-muted-foreground pt-4 pb-8">
       PAG. WEB EMPRESARIAL / 2024 
      </p>
      <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <GenericButton3/>
         {/*} <Button className="w-full md:w-1/3">Get Started</Button>
*/}
         
        </div>
    </section>
  );
};
