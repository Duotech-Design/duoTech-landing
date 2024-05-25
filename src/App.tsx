import { useState, useEffect } from 'react';
import RosslerComponent from './components/rossler/RosslerAttractor';
import './App.css';
function App() {
  const [text, setText] = useState('');
  const fullText = 'Tecnología y diseño';

  useEffect(() => {
    const timer = setTimeout(() => {
      setText((prevText) => fullText.slice(0, prevText.length + 1));
    }, 100); // Ajusta la velocidad de la animación aquí

    // Limpia el temporizador al desmontar
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <div style={{ position: 'relative' }}>
      <RosslerComponent />
      <h1 style={{ position: "absolute", top: "50%", left: "40%", fontSize:"76px" }}>DuoTech</h1>
      <h1 style={{ position: 'absolute', top: '22%', left: '35%', fontSize: '36px', writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>{text}</h1>
      {/* Resto de tu código */}
    </div>
  );
}

export default App;