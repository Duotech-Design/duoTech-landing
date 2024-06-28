import React, { useState, useEffect } from "react";

interface TextScramblerProps {
  text: string;
  loop?: boolean;
}

const Messenger: React.FC<TextScramblerProps> = ({ text, loop = false }) => {
  const [scrambledText, setScrambledText] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    let counter = 0;

    const scramble = () => {
      const characters = text;
      let result = "";
      for (let i = 0; i < text.length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      setScrambledText(result);

      counter++;
      if (counter >= text.length) {
        clearInterval(interval);
        setScrambledText(text);
        if (loop) {
          timeout = setTimeout(() => {
            counter = 0;
            interval = setInterval(scramble, 100);
          }, 2000);
        }
      }
    };

    interval = setInterval(scramble, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, loop]);

  return <span>{scrambledText}</span>;
};

export default Messenger;
