import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import heroImage from "/heroImage.png";
import GenereicButton2 from "../components/ui/Buttons/GenericButton2";

// Definir el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string().email("Ingresa un correo válido").required("El email es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "El teléfono debe ser numérico y de 10 dígitos")
    .required("El teléfono es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export const Cotiza = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(data);
    toast.success("¡Gracias por contarnos sobre tu proyecto! Nos pondremos en contacto contigo muy pronto!  ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    reset();
  };

  return (
    <section id="cotiza" className="container flex flex-col py-24 bg-[#2D2E31] relative">
      <ToastContainer />
      <div className="w-2/4 mb-8">
        <h1 className="text-white">CONTACTANOS</h1>
      </div>
      <h2 className="text-5xl text-white ">
        EMPECEMOS A CONSTRUIR UN NEGOCIO DURADERO
      </h2>
     

      <div className="container mx-auto flex flex-col lg:flex-row items-start mt-12 lg:mt-0">
        <div className="flex flex-col w-full lg:w-1/2 pr-8">
          <p className="text-white mt-4 roboto-Font">
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
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-opacity-80 p-8 rounded-md shadow-lg w-full lg:w-3/4"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                {...register("name")}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Teléfono"
                {...register("phone")}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full"
              />
              <p className="text-red-500">{errors.phone?.message}</p>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                {...register("message")}
                className="mt-2 px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full h-24"
              />
              <p className="text-red-500">{errors.message?.message}</p>
            </div>
            <GenereicButton2 />
          </form>
        </div>
      </div>
    </section>
  );
};
