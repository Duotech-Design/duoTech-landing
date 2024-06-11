import heroImage from "/heroImage.jpg";

export const About = () => {
  return (
    <section id="about" className="container">
      <div className=" flex justify-center ">
        <img src={heroImage} className="object-cover  w-full rounded-sm "></img>
      </div>
    </section>
  );
};
