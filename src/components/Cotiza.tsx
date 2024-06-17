import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GenericButton from "../components/ui/Buttons/GenericButton";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

// Definir el esquema de validación con Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  email: Yup.string()
    .email("Ingresa un correo válido")
    .required("El email es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "El teléfono debe ser numérico y de 10 dígitos")
    .required("El teléfono es obligatorio"),
  message: Yup.string().required("El mensaje es obligatorio"),
});

export const Cotiza = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: Record<string, unknown> | undefined) => {
    const servicesId = "default_service";
    const templateId = "template_085ihoa";
    try {
      await emailjs.send(servicesId, templateId, data);
    } catch (error) {
      console.log("error");
    }
    toast.success(
      "¡Gracias por contarnos sobre tu proyecto! Nos pondremos en contacto contigo muy pronto!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
    reset();
  };

  useEffect(() => {
    emailjs.init("ZImBVJpi19LozqG4Y");
  }, []);

  return (
    <section id="cotiza" className="relative min-h-screen bg-gray-800">
      <img
        src="/cotizacion.png"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full "
      />
      <ToastContainer />
      <div className="absolute top-10 right-10 text-white text-xl cursor-pointer flex items-center">
        <button className="flex items-center text-white hover:text-gray-300">
          <span className="mr-2">Close</span>
          <img src="/close.png" alt="Close" className="w-6 h-6" />
        </button>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-full py-24 relative z-10">
        <div className="w-full lg:w-1/2 text-white px-4 lg:px-16 mt-8 lg:mt-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            ¡Queremos conocerte, cuéntanos sobre tu proyecto!
          </h1>
          <p className="text-base md:text-lg lg:text-xl mt-80">
            ¡Estamos aquí para ayudarte! Contáctanos hoy, conoce a nuestro equipo
            y descubre si somos la opción ideal para tus proyectos y objetivos.
            ¡Haz la elección correcta desde el principio!
          </p>
        </div>
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-sm md:text-base lg:text-lg">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre completo"
                {...register("name")}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 mt-1">{errors.name?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 mt-1">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Teléfono"
                {...register("phone")}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 mt-1">{errors.phone?.message}</p>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Cuéntanos sobre tu proyecto"
                {...register("message")}
                className="mt-2 px-4 py-2 border border-gray-300 rounded-md w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-red-500 mt-1">{errors.message?.message}</p>
            </div>
            <div className="flex justify-end">
              <GenericButton title="COTIZA TU PROYECTO" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
