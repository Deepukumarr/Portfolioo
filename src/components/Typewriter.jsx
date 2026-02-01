import { useEffect, useState } from "react";

const roles = [
  "Front-End Developer",
  "Back-End Developer",
  "MERN Stack Developer",
];

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-white">
      {text}
      <span className="ml-1 animate-pulse text-purple">|</span>
    </h2>
  );
};

export default TypeWriter;
