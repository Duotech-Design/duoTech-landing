import { useState, useEffect } from "react";

export default function Text( {fullText = "Duo Tech"}: {fullText: string}) {
  const [text, setText] = useState("");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setText((prevText) => fullText.slice(0, prevText.length + 1));
    }, 200); // Ajusta la velocidad de la animación aquí

    // Limpia el temporizador al desmontar
    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity((prevOpacity) => prevOpacity === 0 ? 1 : 0);
    }, 500); // Ajusta la velocidad de la animación aquí

    // Limpia el temporizador al desmontar
    return () => clearInterval(timer);
  }, []);

  return (
    <h1
      className="typing-text" // Añade la clase CSS aquí
      style={{
        position: "absolute",
        top: 50,
        left: 50,
        fontSize: "4rem",
        color: "white",
        writingMode: "horizontal-tb",
        transform: "rotate(0deg)",
      }}
    >
      {text}<span style={{ opacity: opacity, transition: 'opacity 0.5s' }}>|</span>
    </h1>
  );
}