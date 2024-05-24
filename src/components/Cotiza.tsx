import heroImage from "/heroImage.png";
import React, { useState } from "react";
import GenereicButton2 from "../components/ui/Buttons/GenericButton2";

export const Cotiza = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log({ name, email, phone, message });

    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <section className="container flex flex-col py-24 bg-[#2D2E31] relative">
      <h2 className="text-3xl text-white mb-3">
        EMPECEMOS A CONSTRUIR UN NEGOCIO DURADERO
      </h2>
      <div className="w-2/4">
        <h1 className="text-white">CONTACTANOS</h1>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-start mt-12 lg:mt-0">
        <div className="flex flex-col w-full lg:w-1/2 pr-8">
          <p className="text-white mt-4">
            Con tantos diseñadores y estudios para elegir, te encuentras ante un
            dilema de opciones. Elegir uno es difícil, seleccionar el adecuado
            es aún más complicado. Queremos asegurarnos de que tomes la decisión
            correcta desde el principio.
          </p>
          <p className="text-white mt-4">
            Contáctanos hoy mismo, conoce al equipo y veamos si somos la opción
            ideal para lo que quieres hacer y a dónde quieres llegar.
          </p>
        </div>

        <div className="relative w-full lg:w-1/2 flex items-center justify-center">
          <img
            src={heroImage}
            alt="Imagen de proyectos"
            className="absolute inset-0 object-cover h-full w-full opacity-30"
          />
          <form
            onSubmit={handleSubmit}
            className="relative bg-opacity-80 p-8 rounded-md shadow-lg w-full lg:w-3/4"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Teléfono"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full h-24"
              />
            </div>
            <GenereicButton2 />
          </form>
        </div>
      </div>
    </section>
  );
};
