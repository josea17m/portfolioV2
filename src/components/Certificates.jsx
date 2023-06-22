import { Link } from "react-router-dom";
import ProgramacionWebFullStack from "../certificates/Certificado+de+Participación+-+Jose+Montero.pdf";
import DiplomaJavaScriptpractico from "../certificates/diploma-javascript-practico.pdf";
import DiplomabasicoJavaScript from "../certificates/diploma-basico-javascript.pdf";
import VariablesYEstructurasJava from "../certificates/VARIABLES Y ESTRUCTURAS JAVA.pdf";
import ConceptualizacionDelLenguajeDeProgramacionC from "../certificates/CONCEPTUALIZACION C++.pdf";
import MetodologiaDeLaProgramacionDeSistemasInformaticos from "../certificates/METODOLOGIA DE LA PROGRAMACION DE SISTEMAS INFORMATICOS.pdf";

const Certificates = () => {
  const styles = {
    stroke: "none",
    fillRule: "nonzero",
    fill: "currentColor",
    fillOpacity: 1,
  };
  return (
    <div className="text-slate-400 max-w-screen text-center bg-slate-900">
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 50 50"
          version="1.1"
          className="m-4 text-teal-400 hover:text-[#f1f5f9] duration-300"
        >
          <g id="surface1">
            <path
              style={styles}
              d="M 50 0 L 0 0 L 0 50 L 50 50 Z M 31.613281 35.414062 L 28.140625 39.011719 L 13.800781 25.191406 L 28.121094 11.046875 L 31.621094 14.609375 L 20.953125 25.144531 Z M 31.613281 35.414062 "
            />
          </g>
        </svg>
      </Link>
      <div className="text-left mx-auto md:w-1/3 w-3/4 text-[#0f172a]">
        <ul className="flex flex-col gap-3 bg-teal-400 p-5">
          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-500">
            <a target="_blank" rel="noreferrer" href={ProgramacionWebFullStack}>
              {" "}
              Programación Web FullStack
            </a>
          </li>

          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-300">
            <a
              target="_blank"
              rel="noreferrer"
              href={DiplomaJavaScriptpractico}
            >
              {" "}
              Diploma JavaScript práctico
            </a>
          </li>

          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-300">
            <a target="_blank" rel="noreferrer" href={DiplomabasicoJavaScript}>
              {" "}
              Diploma básico JavaScript
            </a>
          </li>

          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-300">
            <a
              target="_blank"
              rel="noreferrer"
              href={VariablesYEstructurasJava}
            >
              {" "}
              Variables y estructuras Java
            </a>
          </li>

          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-300">
            <a
              target="_blank"
              rel="noreferrer"
              href={ConceptualizacionDelLenguajeDeProgramacionC}
            >
              {" "}
              Conceptualización del lenguaje de programación C++
            </a>
          </li>

          <li className=" border-b-[1px] p-3 border-[#0f172a] hover:text-[#f1f5f9] hover:bg-[#0f172a] duration-300">
            <a
              target="_blank"
              rel="noreferrer"
              href={MetodologiaDeLaProgramacionDeSistemasInformaticos}
            >
              {" "}
              Metodología de la programación de sistemas informáticos
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Certificates;
