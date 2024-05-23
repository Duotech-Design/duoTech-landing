import heroImage from "/heroImage.png";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-8">
      <div className=" flex justify-center ">
        <img src={heroImage} className="object-cover h-[600px] w-auto rounded-sm "></img>
      </div>
    </section>
  );
};
