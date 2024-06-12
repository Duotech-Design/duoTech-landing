import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cotizaImg from "/cotizaImg.jpg";
import GenericButton2 from "../components/ui/Buttons/GenericButton2";
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
    <section id="cotiza" className="container mx-auto py-24 relative">
      <ToastContainer />
      <div className="w-full flex items-center mb-8">
        <h1 className="flex-shrink-0 mr-4 text-xl">CONTÁCTANOS</h1>
        <h2 className="text-5xl ml-auto">EMPECEMOS A CONSTRUIR UN NEGOCIO DURADERO</h2>
      </div>

      <div className="relative w-full h-[700px]">
        <img
          src={cotizaImg}
          alt="Imagen de proyectos"
          className="absolute inset-0 object-cover w-full h-full opacity-60"
        />
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between p-8 bg-gray-900 bg-opacity-40">
          <div className="w-full lg:w-1/2 text-white p-4 mt-[-250px]">
            <p className="mt-4 text-lg">
              Con tantos diseñadores y estudios para elegir, te encuentras ante un
              dilema de opciones. Elegir uno es difícil, seleccionar el adecuado
              es aún más complicado. Queremos asegurarnos de que tomes la decisión
              correcta desde el principio.
            </p>
            <p className="mt-2 text-lg">
              Contáctanos hoy mismo, conoce al equipo y veamos si somos la opción
              ideal para lo que quieres hacer y a dónde quieres llegar.
            </p>
          </div>

          <div className="relative w-full lg:w-1/2 flex items-center justify-center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative p-8 rounded-md shadow-lg w-full lg:w-3/4 bg-gray-100 bg-opacity-70"
            >
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
              <GenericButton2 title="ENVIAR" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};