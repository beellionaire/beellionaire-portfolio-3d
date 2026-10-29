import { useScroll } from "framer-motion";
import { useRef } from "react";
import AnimatedChar from "./AnimatedChar";

const AnimatedText = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  let charCount = 0;

  return (
    <p ref={containerRef} className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="mr-[0.25em] inline-block">
          {word.split("").map((char, charIndex) => {
            const currentIndex = charCount++;
            return (
              <AnimatedChar
                key={charIndex}
                char={char}
                progress={scrollYProgress}
                index={currentIndex}
                total={chars.length}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};

export default AnimatedText;
