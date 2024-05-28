// import { Button } from "./ui/button";



import GenericButton from "./ui/Buttons/GenericButton";

export const Hero = () => {
  return (
    <section className="flex  justify-center h-[700px]">
      <div className=" flex flex-col justify-center items-center ">
        <main className="mt-96 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="inline bg-gradient-to-r from-[#d4d3d4]  to-[#879EAD] text-transparent bg-clip-text inconsolata-miUniquifier">
              TECNOLOGIA 
            </span>{" "}
            
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="inline bg-gradient-to-r from-[#d4d3d4] via-[#879EAD] to-[#879EAD] text-transparent bg-clip-text">
             &  DISEÑO
            </span>{" "}
            
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 roboto-Font ">
        Transformando ideas en experiencias digitales.  Donde el diseño encuentra la tecnología.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <GenericButton/>
          {/* <Button className="w-full md:w-1/3">Get Started</Button> */}
         
        </div>
      </div>      
     <div className="shadow"></div> 
    </section>
  );
};
