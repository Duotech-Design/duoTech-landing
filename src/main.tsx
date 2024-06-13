import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next"; 
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    </I18nextProvider>
  </React.StrictMode>
);
