/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";

const NavBar = () => {
  const [about, setAbout] = useState(true);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);

  useEffect(() => {
    const aboutDiv = document.getElementById("about");
    const skillsDiv = document.getElementById("skills");
    const projectsDiv = document.getElementById("projects");

    window.addEventListener("scroll", () => {
      if (aboutVisible(aboutDiv)) {
        setAbout(true);
      } else {
        setAbout(false);
      }

      if (skillsVisible(skillsDiv)) {
        setSkills(true);
        setAbout(false);
      } else {
        setSkills(false);
      }

      if (projectsVisible(projectsDiv)) {
        setProjects(true);
        setSkills(false);
      } else {
        setProjects(false);
      }
    });
  }, []);

  function aboutVisible(d) {
    const caja = d.getBoundingClientRect();

    return caja.top == 0 ? true : caja.top > -360 && true;
  }

  function skillsVisible(d) {
    const caja = d.getBoundingClientRect();
    return caja.top == 0 ? true : caja.top < 380 && true;
  }

  function projectsVisible(d) {
    const caja = d.getBoundingClientRect();
    return caja.top == 0 ? true : caja.top < 400 && true;
  }

  return (
    <nav className="mt-10 hidden md:block">
      <ul>
        <li className="list-none">
          <div className="flex items-center gap-2">
            <div
              className={`
              ${
                about ? "bg-slate-200 w-[60px]" : "bg-slate-500 w-[30px]"
              } duration-200 h-[1px] rounded-full  hover:bg-slate-200 hover:w-[60px]`}
            ></div>
            <a
              className={`${
                about ? "text-slate-200" : "text-slate-500"
              } duration-200 hover:text-slate-200 outline-none`}
              href="#about"
            >
              Sobre mí
            </a>
          </div>
        </li>
        <li className="list-none">
          <div className="flex items-center gap-2">
            <div
              className={` ${
                skills ? "bg-slate-200 w-[60px]" : "bg-slate-500 w-[30px]"
              } duration-200 h-[1px] rounded-full hover:bg-slate-200 hover:w-[60px]`}
            ></div>
            <a
              className={`${
                skills ? "text-slate-200" : "text-slate-500"
              } duration-200 hover:text-slate-200 outline-none`}
              href="#skills"
            >
              Tecnologías
            </a>
          </div>
        </li>
        <li className="list-none">
          <div className="flex items-center gap-2">
            <div
              className={`${
                projects ? "bg-slate-200 w-[60px]" : "bg-slate-500 w-[30px]"
              } duration-200 h-[1px] rounded-full hover:bg-slate-200 hover:w-[60px]`}
            ></div>
            <a
              className={`${
                projects ? "text-slate-200" : "text-slate-500"
              } duration-200 hover:text-slate-200 outline-none`}
              href="#projects"
            >
              Proyectos
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
