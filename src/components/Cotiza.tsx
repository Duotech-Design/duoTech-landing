import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import TransparentButton from "./ui/Buttons/TransparentButton";
import { useTranslation } from "react-i18next";
type State = "loading" | "success" | "start" | "error";

type Event = { type: "CLICK" };

interface StateMachine {
  initial: State;
  states: {
    [key in State]: {
      on: {
        [key in Event["type"]]: State;
      };
    };
  };
}

const machine: StateMachine = {
  initial: "start",
  states: {
    start: {
      on: {
        CLICK: "loading"
      }
    },
    loading: {
      on: {
        CLICK: "success"
      }
    },
    success: {
      on: {
        CLICK: "error"
      }
    },
    error: {
      on: {
        CLICK: "start"
      }
    }
  }
};

const transition = (state: State, event: Event): State => {
  return machine.states[state].on[event.type];
};
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

export const Cotiza = ({ onClose }: { onClose: () => void }) => {
  const { t } = useTranslation("global");
  const [state, setState] = useState<State>(machine.initial);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: Record<string, unknown> | undefined) => {
    setState(transition(state, { type: "CLICK" }));

    const servicesId = "default_service";
    const templateId = "template_085ihoa";

    emailjs.send(servicesId, templateId, data)
      .then(() => {
        setState("success");
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
      })
      .catch((error) => {
        console.log(error);
        setState("error");
        toast.error(
          "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.",
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
      })
      .finally(() => {
        reset();
        setTimeout(() => {
          setState("start");
          onClose();
        }, 5000);
      });
  };

  useEffect(() => {
    emailjs.init("ZImBVJpi19LozqG4Y");
  }, []);

  return (
    <section id="cotiza" className="relative bg-gray-800">
      <img
        src="/4.svg"
        alt="Background"
        className="absolute inset-0 object-cover w-screen h-screen"
      />
      <ToastContainer />
      <div className="absolute md:top-10 md:right-10 top-5 right-5 text-white md:text-xl text-sm cursor-pointer flex items-center z-50">
        <button
          onClick={onClose}
          className="flex items-center text-white hover:text-gray-300"
        >
          <span className="mr-2 cursor-pointer">Close</span>
          <img
            src="/close.png"
            alt="Close"
            className="w-6 h-6 cursor-pointer"
          />
        </button>
      </div>
      <div className="md:px-16 flex flex-col lg:flex-row items-start justify-between h-full py-24 relative z-10">
        <div className="w-full text-white px-4 lg:px-0 mt-8 lg:mt-0 text-left space-y-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">
            {t("cotiza.title")}
            <br /> {t("cotiza.title_2")}
          </h1>
        </div>
        <div className="w-full md:w-3/4 px-4 lg:px-8 mt-20 lg:mt-24 mb-24 lg:mb-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-sm md:text-base lg:text-2xl cotiza-form"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder={t("cotiza.form.name")}
                {...register("name")}
                className="cotiza-input"
              />
              <p className="text-red-500 mt-1">{errors.name?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder={t("cotiza.form.email")}
                {...register("email")}
                className="cotiza-input"
              />
              <p className="text-red-500 mt-1">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder={t("cotiza.form.phone")}
                {...register("phone")}
                className="cotiza-input"
              />
              <p className="text-red-500 mt-1">{errors.phone?.message}</p>
            </div>
            <div className="mb-4">
              <textarea
                placeholder={t("cotiza.form.message")}
                {...register("message")}
                className="cotiza-input"
              />
              <p className="text-red-500 mt-1">{errors.message?.message}</p>
            </div>
            <div className="flex justify-end">
              <TransparentButton title={t(`cotiza.form.button.${state}`)} state={state} />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full text-left text-white px-4 lg:px-16 absolute bottom-20 mb-8 cotiza-text-form">
        <p className="text-xs md:text-sm lg:text-xl w-full lg:w-1/2">
          {t("cotiza.content_1")}
          <br /> {t("cotiza.content_2")}
        </p>
      </div>
    </section>
  );
};
