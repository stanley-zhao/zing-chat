import { useState, useEffect } from "react";

export const MouseTracker = () => {
  const [rippleColor, setRippleColor] = useState("hsl(200, 100%, 85%)");
  const [hue, setHue] = useState(200);
  const [bgHue, setBgHue] = useState(0);
  const [bgColor, setBgColor] = useState("hsl(0, 0%, 95%)");
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setHue((prevHue) => (prevHue + 5) % 360);
      setBgHue((prevBgHue) => (prevBgHue + 2) % 360);
    }, 500); 

    return () => clearInterval(colorInterval);
  }, []);

  useEffect(() => {
    setRippleColor(`hsl(${hue}, 100%, 70%)`);
    setBgColor(`hsl(${bgHue}, 10%, 95%)`); 
  }, [hue, bgHue]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition(() => ({
        x: e.clientX,
        y: e.clientY,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center"
      style={{
        backgroundColor: bgColor,
        transition: "background-color 2s ease-in-out",
      }}
    >
  
      <div
        className="absolute w-full h-full opacity-20 animate-pulse"
        style={{
          background: `radial-gradient(circle, hsl(${bgHue}, 10%, 97%) 10%, hsl(${bgHue}, 10%, 90%) 90%)`,
          transition: "background 2s ease-in-out",
        }}
      ></div>
      
      <div
        className="absolute w-60 h-60 rounded-full opacity-30 transition-all duration-200 ease-out"
        style={{
          backgroundColor: rippleColor,
          transform: `translate(${position.x - 80}px, ${position.y - 80}px) scale(1.5)`,
          filter: "blur(40px)",
          transition: "background-color 2s ease, transform 0.05s ease-out",
        }}
      ></div>
    </div>
  );
};