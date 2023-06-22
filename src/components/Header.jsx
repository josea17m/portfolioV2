import { useEffect } from "react";
import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

const Header = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".word span");

    spans.forEach((span, idx) => {
      span.addEventListener("click", (e) => {
        e.target.classList.add("active");
      });
      span.addEventListener("animationend", (e) => {
        e.target.classList.remove("active");
      });

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));
    });
  }, []);

  return (
    <header className="lg:py-24 md:px-10 lg:text-left md:text-left lg:w-5/12 md:w-5/12 md:fixed h-screen flex flex-col justify-evenly lg:justify-between md:justify-between bg-slate-900">
      <div className="flex flex-col md:justify-start md:w-auto w-screen justify-center">
        <h1 className="text-slate-200 text-5xl md:text-left text-center">
          <div className="word my-4">
            <span className="hover:text-[#f0dc1c] duration-200">A</span>
            <span className="hover:text-[#18bad2] duration-200">L</span>
            <span className="hover:text-[#90bc3c] duration-200">E</span>
            <span className="hover:text-[#0864b4] duration-200">J</span>
            <span className="hover:text-[#e04c24] duration-200">A</span>
            <span className="hover:text-[#54b03c] duration-200">N</span>
            <span className="hover:text-[#d08424] duration-200">D</span>
            <span className="hover:text-[#f0dc1c] duration-200">R</span>
            <span className="hover:text-[#18bad2] duration-200">O</span>
          </div>
          <div className="word my-4">
            <span className="hover:text-[#f0dc1c] duration-200">M</span>
            <span className="hover:text-[#18bad2] duration-200">O</span>
            <span className="hover:text-[#90bc3c] duration-200">N</span>
            <span className="hover:text-[#0864b4] duration-200">T</span>
            <span className="hover:text-[#e04c24] duration-200">E</span>
            <span className="hover:text-[#54b03c] duration-200">R</span>
            <span className="hover:text-[#d08424] duration-200">O</span>
          </div>
        </h1>

        <h2 className="text-slate-200 pl-2 text-xl mt-3">
          Desarrollador Web FullStack
        </h2>

        <p className="mt-4 pl-2 md:w-auto w-[99%]">
          Creando sitios webs cómodos y amigables para los usuarios
        </p>

        <NavBar />
      </div>

      <SocialMedia />
    </header>
  );
};

export default Header;
