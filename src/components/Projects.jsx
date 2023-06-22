import ProjectItem from "./ProjectItem";
import VeterinariaReact from "./veterinaria-react.png";
import ControlDePedidos from "./control-de-pedidos.png";
import ToDoList from "./to-do-list.png";
import PortafolioV1 from "./portafolioV1.png";
import BlockDeNotas from "./block-de-notas.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-0 h-auto py-10 lg:pt-24 md:pt-24 text-left"
    >
      <h2 className="text-slate-200 text-2xl mb-4">Proyectos</h2>
      <div className="flex flex-col gap-5">
        <ProjectItem
          imagen={VeterinariaReact}
          titulo="Control de pacientes"
          descripcion="Control de pacientes para veterinaria"
          tecno={["React", "Tailwind", "Netlify", "Git", "Github"]}
          url={"https://github.com/josea17m/veterinaria-react"}
          urlPage={"https://veterinariaja-pacientes.netlify.app"}
        />
        <ProjectItem
          imagen={ControlDePedidos}
          titulo="Control de pedidos"
          descripcion="Aplicacion web para controlar el flujo de pedidos, capacidad de llevar el historial de ventas"
          tecno={["React", "Tailwind", "Netlify", "Git", "Github"]}
          url={""}
          urlPage={"https://control-de-pedidos.netlify.app"}
        />
        <ProjectItem
          imagen={ToDoList}
          titulo="Lista de tareas"
          descripcion="To-Do-List desarrollado para almacenar tus tareas, eliminarlas y marcarlas como listas"
          tecno={["React", "Tailwind", "Netlify", "Git", "Github"]}
          url={"https://github.com/josea17m/to-do-list-react"}
          urlPage={"https://to-do-list-josea17m.netlify.app"}
        />
        <ProjectItem
          imagen={BlockDeNotas}
          titulo="Block de notas"
          descripcion="Block de notas inspirado en Google Keeps"
          tecno={["React", "Tailwind", "Netlify", "Git", "Github"]}
          url={"https://github.com/josea17m/block-de-notas-react"}
          urlPage={"https://block-de-notas.netlify.app"}
        />
        <ProjectItem
          imagen={PortafolioV1}
          titulo="Portafolio v1"
          descripcion="Primera versión que desarrollé de mi portafolio"
          tecno={["Javascript", "HTML", "CSS", "Netlify", "Git", "Github"]}
          url={"https://github.com/josea17m/codigo-portafolio"}
          urlPage={"https://portafolio-josea17m.netlify.app"}
        />
      </div>
    </div>
  );
};

export default Projects;
