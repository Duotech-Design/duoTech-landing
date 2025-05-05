import React from "react";

export const ContactSection: React.FC = () => {
  return (
    <section className="flex w-full justify-center bg-[#e5dfd5] px-6 py-16 text-[#21260D]">
      <div className="w-full max-w-6xl space-y-12">
        <div className="max-w-xl">
          <h2 className="mb-4 text-xl font-light tracking-wide text-[#21260D]">
            GET IN <span className="font-ace tracking-wider">ToUCH!</span>
          </h2>
          <p className="text-xs leading-relaxed tracking-wide md:text-base">
            FILL OUT THE FORM BELOW AND WE’LL GET BACK TO YOU TO SCHEDULE A
            DISCOVERY CALL. WE’RE EXCITED TO LEARN MORE ABOUT YOUR PROJECT AND
            EXPLORE HOW WE CAN BRING YOUR IDEAS TO LIFE!
          </p>
        </div>
        <div className="grid min-h-[600px] grid-cols-1 gap-12 md:grid-cols-2">
          <div className="h-full">
            <img
              src="/coffee.png"
              alt="Coffee and laptop"
              className="h-full w-full object-cover"
            />
          </div>
          <form className="flex flex-col justify-start space-y-4 text-base">
            <div>
              <label htmlFor="name" className="mb-1 block">
                NAME:
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-[#21260D] bg-transparent px-2 py-1 text-sm outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block">
                EMAIL:
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-[#21260D] bg-transparent px-2 py-1 text-sm outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="services"
                className="mb-1 block text-xs uppercase md:text-base"
              >
                WHAT SERVICES ARE YOU INTERESTED IN?
              </label>
              <select
                id="services"
                className="w-full border border-[#21260D] bg-transparent px-2 py-1 text-sm outline-none"
              >
                <option>WEB DEVELOPMENT</option>
                <option>APP DESIGN</option>
                <option>BRANDING</option>
                <option>CONSULTING</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-xs uppercase md:text-base"
              >
                TELL US A LITTLE BIT ABOUT YOUR BUSINESS?
              </label>
              <textarea
                id="message"
                rows={18}
                className="w-full border border-[#21260D] bg-transparent px-2 py-1 text-sm outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full border border-[#21260D] px-6 py-2 text-sm tracking-wider transition hover:bg-[#21260D] hover:text-white"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
