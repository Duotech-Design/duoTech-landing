import React, { useState, useEffect } from "react";

interface TextScramblerProps {
  text: string;
  isHovered: boolean;
}

const MessengerHover: React.FC<TextScramblerProps> = ({ text, isHovered }) => {
  const [scrambledText, setScrambledText] = useState<string>("");

  useEffect(() => {
    if (isHovered) {
      let interval: NodeJS.Timeout;
      let counter = 0;

      const scramble = () => {
        const characters = text;
        let result = "";
        for (let i = 0; i < text.length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        setScrambledText(result);

        counter++;
        if (counter >= text.length) {
          clearInterval(interval);
          setScrambledText(text);
        }
      };

      interval = setInterval(scramble, 20);

      return () => clearInterval(interval);
    } else {
      setScrambledText(text);
    }
  }, [text, isHovered]);

  return <span>{scrambledText}</span>;
};

export default MessengerHover;
