import React, { useState, useEffect } from "react";

interface TextScramblerProps {
  text: string;
}

const Messenger: React.FC<TextScramblerProps> = ({ text }) => {
  const [scrambledText, setScrambledText] = useState<string>("");

  useEffect(() => {
    // eslint-disable-next-line prefer-const
    let interval: NodeJS.Timeout;
    let counter = 0;

    const scramble = () => {
      const characters =
       text;
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

    interval = setInterval(scramble, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{scrambledText}</span>;
};

export default Messenger;
