import heroImage from "../../public/heroImage.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className=" flex justify-center mt-10">
        <img src={heroImage} className="object-cover h-[600px] w-auto "></img>
      </div>
    </section>
  );
};
