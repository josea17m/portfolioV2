/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMouseX(e.clientX);
  //     setMouseY(e.clientY);
  //     punteroRef.current.style.top = mouseY - 160 + "px";
  //     punteroRef.current.style.left = mouseX - 160 + "px";
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // });

  //  const bgRef = useRef(null);
  //    useEffect(() => {
  //    const handleMouseMove = (e) => {
  //      setMouseX(e.clientX);
  //      setMouseY(e.clientY);
  //      bgRef.current.style.background("background: radial-gradient(600px at +${mouseX}+px +${mouseY}+px, rgba(29, 78, 216, 0.15), transparent 80%)")
  //    };
  //    window.addEventListener("mousemove", handleMouseMove);

  //    return () => {
  //      window.removeEventListener("mousemove", handleMouseMove);
  //    };
  //  });

  return (
    <div className="text-slate-400 max-w-screen text-center bg-slate-900">

        <Header />
        <MainContent />

    </div>
  );
}

export default App;
