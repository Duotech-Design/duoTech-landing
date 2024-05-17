// import { Button } from "./ui/button";



import GenericButton from "./ui/Buttons/GenericButton";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 ">
      <div className="flex flex-col justify-center items-center h-full">
        <main className="text-center lg:text-start space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="inline bg-gradient-to-r from-[#d4d3d4]  to-[#879EAD] text-transparent bg-clip-text">
              TECNOLOGIA 
            </span>{" "}
            
          </h1>{" "}
          &{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#d4d3d4] via-[#879EAD] to-[#879EAD] text-transparent bg-clip-text">
              DISEÑO
            </span>{" "}
            
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Transformando ideas en experiencias digitales.  Donde el diseño encuentra la tecnología.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <GenericButton/>
         {/*} <Button className="w-full md:w-1/3">Get Started</Button>
*/}
         
        </div>
      </div>
   
   
   
   {/*  <div className="z-10">
        <HeroCards />
      </div>
*/}
      
      <div className="shadow"></div>
    </section>
  );
};
