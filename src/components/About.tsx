import heroImage from "/heroImage.jpg";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-8">
      <div className=" flex justify-center ">
        <img src={heroImage} className="object-cover h-[800px] w-auto rounded-sm "></img>
      </div>
    </section>
  );
};
