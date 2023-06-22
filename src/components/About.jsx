import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="text-left pb-10 lg:h-auto md:h-auto text-sm">
      <h2 className="text-slate-200 text-2xl">Sobre mí</h2>
      <div className="text-slate-400 mt-4">
        <p>
          Tengo 20 años y desde finales del{" "}
          <span className="text-slate-100"> 2021</span> estoy en el mundo de la
          programación.
        </p>
        <br />
        <p>
          Todo empezó cuando, debido a que soy aficionado a los videojuegos, me
          interese por la programación. Inicié estudiando algoritmos y
          metodología de la programacion. Luego de eso aprendí{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            Java
          </span>
          , mi primer lenguaje de programación. Y para finalizar el año pasé a
          estudiar{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            C++
          </span>
          .
        </p>
        <br />
        <h6 className="text-slate-100 text-xl">Inicios del 2022</h6>
        <br />
        <p>
          Aquí es donde me decido ser desarrollador web, empezando con{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            HTML
          </span>
          ,{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            CSS
          </span>{" "}
          y un poco de
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            {" "}
            Javascript
          </span>
          .
        </p>
        <br />
        <p>
          En <span className="text-slate-100">Junio del 2022</span>, inicio un
          curso con Digital House, donde reafirmo mis bases en la programación,
          me familiarizo con{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            {" "}
            Git
          </span>
          ,{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            Github
          </span>{" "}
          y{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            Heroku
          </span>
          , adquiero mas habilidad con Javascript, aprendo{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            NodeJS
          </span>
          ,{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            ExpressJS
          </span>
          ,
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            {" "}
            MySQL
          </span>{" "}
          y finalmente{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            React
          </span>
          .
        </p>
        <br />
        <p>
          Terminado ese curso, empiezo a especializarme en React ademas de
          aprender{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            MongoDB
          </span>
          ,{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            Tailwind CSS
          </span>
          ,{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            Remix Run
          </span>{" "}
          y{" "}
          <span className="text-slate-100 duration-200 cursor-pointer hover:text-teal-400">
            NextJS
          </span>
          .
        </p>
      </div>
      <div className="w-full my-10">
        <Link to="/certificates">
          <button className="btn">
            <span>Certificados</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
