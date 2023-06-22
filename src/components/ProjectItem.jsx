/* eslint-disable react/prop-types */

import TecnoItem from "./TecnoItem";

const ProjectItem = ({ imagen, titulo, descripcion, tecno, url, urlPage }) => {
  return (
    <a href={urlPage} target="_blank" rel="noreferrer">
      <div className="flex md:flex-row flex-col justify-between item-project hover:bg-slate-800 rounded p-3 md:p-10 hover:shadow-2xl duration-200 cursor-pointer">
        <img
          className="rounded-sm md:w-1/4 mb-4 md:mb-0 md:mr-4"
          src={imagen}
          alt="Veterinaria con React"
        />

        <div className="flex flex-col justify-between md:w-2/3">
          <div className="flex justify-between gap-1">
            <h4 className="text-slate-200 duration-150 title-project">
              {titulo}{" "}
            </h4>
            <svg
              className="arrow duration-150"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
            </svg>
          </div>

          <p className="my-2">{descripcion}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="z-40 hover:text-teal-400 duration-150"
          >
            Link al repositorio
          </a>

          <ul className="text-xs flex flex-wrap mt-4">
            {tecno?.map((t, index) => (
              <TecnoItem tecnologia={t} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
