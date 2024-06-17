import React, { useEffect, useState } from "react";
import Messenger from "./Messenger";

const texts = ["NUEVO", "DIVERTIDO", "ÚNICO", "ORIGINAL"];

const AnimatedTextWithMessenger: React.FC = () => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % texts.length);
      setCurrentText(texts[(index + 1) % texts.length]);
    }, 2000); // Cambiar cada 2 segundos (ajusta según tus necesidades)

    return () => clearInterval(interval);
  }, [index]);

  return <Messenger text={currentText} />;
};

export default AnimatedTextWithMessenger;
