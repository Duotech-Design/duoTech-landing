import React, { useEffect, useRef, useState } from "react";

export const CtaIdeaSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      const { width } = headingRef.current.getBoundingClientRect();
      setButtonWidth(width);
    }
  }, []);

  return (
    <section className="flex w-full justify-center bg-[#e5dfd5] px-6 py-20 font-ace text-[#21260D]">
      <div className="flex flex-col items-center space-y-2">
        <h2 ref={headingRef} className="text-xl font-light tracking-wide">
          HAVE AN{" "}
          <span className="font-other text-3xl font-semibold">IDEA?</span>
        </h2>

        <button
          style={{
            width: buttonWidth ? `${buttonWidth}px` : "auto",
          }}
          className="border border-[#21260D] py-2 text-sm tracking-wide transition-colors hover:bg-[#21260D] hover:text-[#e5dfd5]"
        >
          TELL US
        </button>
      </div>
    </section>
  );
};
