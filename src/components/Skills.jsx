/* eslint-disable no-unused-vars */
import { useEffect } from "react";

const Skills = () => {
  const generalStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: "8px",
  };

  return (
    <div
      id="skills"
      className="text-left md:text-base h-auto lg:pt-24 md:pt-24"
    >
      <h2 className="text-slate-200 text-2xl mb-10">Tecnologías</h2>
      <div className="grid grid-cols-2 md:flex md:flex-col gap-10 skills-container  duration-300  rounded-lg p-5">
        <div className="js-container flex flex-col md:flex-row justify-evenly gap-2">
          <span className="item-skills">Javascript</span>
          <span className="item-skills">React</span>
          <span className="item-skills">APIs</span>
          <span className="item-skills">Next JS</span>
          <span className="item-skills">Node JS</span>
          <span className="item-skills">Express JS</span>
        </div>
        <div className="html-container flex flex-col md:flex-row justify-evenly gap-2">
          <span className="item-skills">HTML5</span>
          <span className="item-skills">
            CS<span>S</span>
          </span>
          <span className="item-skills">Tailwind CSS</span>
        </div>
        <div className="netlify-container flex flex-col md:flex-row justify-evenly gap-2">
          <span className="item-skills">Netlify</span>
          <span className="item-skills">Heroku</span>
          <span className="item-skills">Github Pages</span>
        </div>

        <div className="db-container flex flex-col md:flex-row justify-evenly gap-2">
          <span className="item-skills">
            Mongo<span>DB</span>
          </span>
          <span className="item-skills">
            My<span>SQL</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;

// Imagenes SVG
/*<div className="flex flex-row justify-start gap-20">
        <div className="flex flex-col gap-3">
           CSS 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 452 520"
            height="100"
            width="100"
          >
            <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
            <path
              fill="#ecedee"
              d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
            />
            <path
              fill="#fff"
              d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
            />
          </svg>

           HTML 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 452 520"
            height="100"
            width="100"
          >
            <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
            <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
            <path
              fill="#ecedee"
              d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
            />
            <path
              fill="#fff"
              d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
            />
          </svg>

           Javascript 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 630 630"
            height="100"
            width="100"
          >
            <rect width="630" height="630" fill="#f7df1e" />
            <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
          </svg>

           Node JS 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
            preserveAspectRatio="xMidYMid"
            fill="#8cc84b"
          >
            <path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z" />
          </svg>
        </div>
        <div className="flex flex-col gap-3">
           Express JS 
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
            <path d="M40 41.753V18.708h1.25v3.625a4.74 4.74 0 0 0 .408-.511c1.044-2.166 3.246-3.533 5.65-3.506 2.85-.085 5.166.97 6.527 3.506a11.27 11.27 0 0 1 .272 10.331c-1.268 2.842-4.4 4.255-7.753 3.736a6.27 6.27 0 0 1-5.004-3.302v9.165zm1.25-14.893l.28 2.706c.494 3.08 2.315 4.9 5.174 5.242a5.88 5.88 0 0 0 6.459-3.736c1.112-2.65 1.03-5.65-.22-8.238a5.76 5.76 0 0 0-6.068-3.353 5.61 5.61 0 0 0-5.012 4.144 28.62 28.62 0 0 0-.613 3.234zm39.498 3.132a6.74 6.74 0 0 1-6.587 5.957c-5.242.264-7.702-3.217-8.093-7.234a11.59 11.59 0 0 1 1.021-6.383 7.12 7.12 0 0 1 7.412-3.974 6.81 6.81 0 0 1 6.042 5.183 34.97 34.97 0 0 1 .587 3.83H67.363c-.255 3.642 1.702 6.57 4.476 7.276 3.455.85 6.408-.647 7.48-3.932.238-.843.672-.962 1.438-.723zm-13.395-3.787h12.314c-.077-3.88-2.493-6.7-5.77-6.732-3.7-.06-6.383 2.647-6.544 6.732zm15.94 3.872H84.5a4.84 4.84 0 0 0 2.842 4.17 7.43 7.43 0 0 0 6.451-.17 2.9 2.9 0 0 0 1.702-2.851 2.63 2.63 0 0 0-1.77-2.63c-1.328-.494-2.74-.766-4.093-1.2a30 30 0 0 1-4.119-1.506c-2.18-1.064-2.315-5.208.153-6.52a8.69 8.69 0 0 1 8.306-.128c1.594.88 2.475 2.657 2.213 4.46H95.15c0-.05-.094-.094-.094-.145-.128-3.3-2.902-4.332-5.88-4.042-.9.1-1.753.372-2.553.774a2.55 2.55 0 0 0-1.48 2.553 2.55 2.55 0 0 0 1.702 2.4c1.3.477 2.68.783 4.025 1.157l3.25.85a3.84 3.84 0 0 1 2.638 3.464c.26 1.745-.63 3.46-2.204 4.255-2.842 1.608-7.523 1.183-9.608-.85-1.067-1.073-1.662-2.53-1.65-4.042zm28.78-6.374h-1.132c0-.153-.06-.3-.077-.417a3.7 3.7 0 0 0-3.013-3.557 7.43 7.43 0 0 0-4.774.23 2.9 2.9 0 0 0-2.102 2.766 2.67 2.67 0 0 0 2.042 2.689l5.174 1.328a14.39 14.39 0 0 1 1.65.502c1.65.6 2.77 2.132 2.82 3.883a4.25 4.25 0 0 1-2.6 4.04 9.47 9.47 0 0 1-7.659.077 5.31 5.31 0 0 1-3.2-5.157h1.106c.416 2.005 1.793 3.675 3.682 4.465s4.046.596 5.764-.516a3.04 3.04 0 0 0 1.634-2.842 2.63 2.63 0 0 0-1.796-2.613c-1.328-.494-2.74-.757-4.093-1.2a30.15 30.15 0 0 1-4.144-1.489c-2.128-1.047-2.298-5.157.128-6.468a8.57 8.57 0 0 1 8.442-.094 4.45 4.45 0 0 1 2.136 4.366zm-74.13 11.83a1.95 1.95 0 0 1-2.417-.919l-4.4-6.085-.638-.85-5.106 6.944a1.87 1.87 0 0 1-2.298.902l6.578-8.825-6.12-7.974c.908-.328 1.92.028 2.425.85l4.56 6.16 4.587-6.136a1.83 1.83 0 0 1 2.281-.851L35.02 21.9l-3.217 4.187a.85.85 0 0 0 0 1.268l6.127 8.178zm27.93-16.892v1.2a6.17 6.17 0 0 0-6.57 6.374q0 4.204 0 8.408v.953h-1.217v-16.86h1.2v3.455c1.472-2.52 3.744-3.455 6.595-3.523zM7.333 26.59l.536-2.647c1.472-5.234 7.472-7.412 11.6-4.17 2.417 1.898 3.02 4.587 2.902 7.617H8.754c-.22 5.412 3.685 8.68 8.68 7.012 1.646-.6 2.885-1.968 3.293-3.668.264-.85.7-.996 1.498-.75a6.91 6.91 0 0 1-3.302 5.047 8 8 0 0 1-9.319-1.191c-1.216-1.367-1.95-3.095-2.093-4.92 0-.3-.1-.58-.17-.85q-.01-.757-.01-1.48zm1.438-.366h12.314c-.077-3.923-2.553-6.706-5.855-6.732-3.676-.05-6.306 2.672-6.468 6.715z" />
          </svg>

           React 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
          >
            <g
              transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
              fill="none"
              fillRule="evenodd"
            >
              <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
              <g stroke="#00d8ff" strokeWidth="24">
                <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
                <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
                <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
              </g>
            </g>
          </svg>

           Git 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 32 32"
          >
            <path
              d="M31.396 14.575L17.425.604a2.06 2.06 0 0 0-2.914 0l-2.9 2.9 3.68 3.68c.856-.3 1.836-.095 2.518.587a2.45 2.45 0 0 1 .581 2.533l3.547 3.547c.858-.296 1.848-.105 2.533.582a2.45 2.45 0 1 1-3.469 3.468c-.72-.72-.898-1.78-.534-2.667l-3.308-3.308v8.705a2.5 2.5 0 0 1 .65.464 2.45 2.45 0 1 1-3.468 3.468 2.45 2.45 0 0 1 0-3.468c.237-.236.5-.415.803-.535v-8.786c-.292-.12-.566-.297-.803-.535a2.45 2.45 0 0 1-.528-2.681l-3.63-3.628-9.58 9.57a2.06 2.06 0 0 0 0 2.915l13.972 13.97a2.06 2.06 0 0 0 2.914 0L31.396 17.5a2.06 2.06 0 0 0 0-2.915"
              fill="#f03c2e"
            />
          </svg>

           MongoDB 
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="60">
            <path
              d="M16.147 5.154l1.09 2.05a6.15 6.15 0 0 0 .824 1.024c.913.913 1.782 1.87 2.56 2.895 1.848 2.427 3.095 5.122 3.986 8.04.534 1.782.824 3.608.846 5.456.09 5.523-1.804 10.266-5.634 14.208a16.3 16.3 0 0 1-2.004 1.715c-.38 0-.557-.3-.713-.557-.3-.5-.468-1.047-.557-1.603-.134-.668-.223-1.336-.178-2.027v-.312c-.022-.067-.356-30.732-.223-30.888z"
              fill="#599636"
            />
            <path
              d="M16.147 5.088c-.045-.09-.09-.022-.134.022.022.445-.134.846-.38 1.225-.267.38-.624.668-.98.98-1.982 1.715-3.54 3.786-4.788 6.102-1.648 3.118-2.516 6.458-2.76 9.977-.11 1.27.4 5.746.802 7.037 1.09 3.43 3.05 6.302 5.6 8.796.624.6 1.292 1.158 1.982 1.692.2 0 .223-.178.267-.312a6.11 6.11 0 0 0 .2-.869c.2-1.113.312-2.227.445-3.34l-.245-31.31z"
              fill="#6cac48"
            />
            <path
              d="M17.24 41.9c.045-.512.3-.935.557-1.358-.267-.11-.468-.334-.624-.58-.134-.223-.245-.5-.334-.735-.312-.935-.38-1.915-.468-2.873v-.58c-.11.09-.134.846-.134.958-.067 1.024-.2 2.027-.4 3.006-.067.4-.11.802-.356 1.158 0 .045 0 .09.022.156.4 1.18.512 2.383.58 3.608v.445c0 .534-.022.423.423.6.178.067.38.09.557.223.134 0 .156-.11.156-.2l-.067-.735v-2.05c-.022-.356.045-.713.09-1.047z"
              fill="#c2bfbf"
            />
            <g transform="matrix(1.021124 0 0 1.021124 -4.376266 -1.845946)">
              <path
                d="M37.73 33.72v2.077a1.45 1.45 0 0 0 .014.246c.027.246.178.396.4.465a4.97 4.97 0 0 0 .63.123c.123.014.164.068.178.2.014.465-.027.52-.478.492-1.052-.055-2.105-.068-3.157 0h-.1c-.328.014-.355-.014-.355-.342 0-.055.014-.123.014-.178 0-.1.068-.15.164-.15.22-.027.424-.082.63-.123.287-.068.45-.246.478-.533.04-.314.04-.642.04-.957l.014-3.662a.56.56 0 0 0-.3-.52 3.89 3.89 0 0 0-.78-.328c-.082-.027-.164-.04-.232-.082-.2-.096-.205-.273-.014-.383.068-.04.15-.068.232-.082a12.42 12.42 0 0 0 2.432-.615c.164-.055.205-.04.22.123.014.1 0 .22-.014.314-.027.178-.027.355-.027.52 0 .068.014.137.082.178s.137 0 .2-.04c.287-.22.574-.424.888-.6.45-.246.93-.465 1.45-.533.63-.082 1.175.082 1.654.492a3.1 3.1 0 0 1 .519.601c.137.2.15.205.328.068.52-.383 1.066-.724 1.654-.97.615-.26 1.244-.3 1.872-.082.642.232 1.08.683 1.34 1.298.22.492.314 1 .314 1.53v3.662c0 .246.1.4.342.52.26.1.547.15.82.205.178.04.178.04.178.22-.027.45-.068.478-.506.45a29.42 29.42 0 0 0-3.293 0c-.22.014-.22.014-.232-.205v-.068c-.014-.37-.014-.37.342-.45l.355-.096a.55.55 0 0 0 .424-.533l.04-1.025-.027-2.678a2.13 2.13 0 0 0-.15-.697c-.342-.834-1.093-1.134-1.818-1.052-.547.055-1.025.273-1.476.588-.096.068-.164.15-.15.287.123.875.04 1.75.055 2.624v1.9c0 .342.137.506.465.588l.63.137c.096.014.15.055.15.164v.1c-.014.383-.04.4-.424.396-1.093-.055-2.187-.04-3.266 0-.37.014-.4-.027-.383-.4.014-.22.04-.232.246-.273l.45-.082c.4-.082.547-.232.574-.656l.04-.916-.027-2.747c-.027-.342-.1-.67-.287-.984-.273-.506-.7-.765-1.285-.793-.588-.04-1.107.178-1.6.45-.342.2-.492.437-.465.834v1.995zm25.747.083v1.927a4.13 4.13 0 0 0 .027.41.42.42 0 0 0 .328.383 3.19 3.19 0 0 0 .724.123c.137.014.164.068.178.178v.096c-.014.478-.068.533-.533.506-1.04-.068-2.077-.055-3.116 0l-.4.014c-.082 0-.1-.04-.123-.096a1.39 1.39 0 0 1 0-.574c.014-.082.068-.1.15-.123.2-.027.37-.068.56-.1.342-.082.465-.22.478-.574l.04-1.148v-3.362c0-.246-.096-.396-.314-.506-.246-.137-.506-.232-.78-.328-.082-.027-.164-.055-.232-.096-.178-.123-.2-.3-.027-.437a.49.49 0 0 1 .273-.11c.875-.137 1.722-.328 2.542-.656.096-.04.137-.014.178.068s.055.178.04.273l-.04.642c0 .082-.04.2.027.232.082.055.137-.068.205-.1a6.09 6.09 0 0 1 1.326-.847c.424-.2.86-.328 1.353-.3.916.055 1.572.52 1.995 1.326.22.424.314.888.355 1.367l.04 1 .014 3.02c.014.232.096.383.328.465a4.47 4.47 0 0 0 .738.178c.22.027.232.068.246.273v.068c-.027.465-.055.478-.52.45a28.59 28.59 0 0 0-3.061 0c-.137.014-.273 0-.4.014-.082 0-.137-.014-.15-.096-.027-.178-.055-.355-.014-.547.014-.082.055-.123.15-.137l.63-.1c.22-.055.342-.2.37-.4l.027-.383-.014-2.856c0-.328-.014-.656-.082-.984-.164-.7-.697-1.2-1.42-1.27-.63-.068-1.2.096-1.722.437-.26.164-.37.396-.37.683v2.064c0-.04 0-.04.014-.04z"
                fill="#47474a"
              />
              <path
                d="M103.503 29.935c-.15-.998-.52-1.886-1.162-2.665a5.27 5.27 0 0 0-2.105-1.558c-.86-.355-1.777-.465-2.706-.492-.383-.014-5.603.068-5.986 0-.096-.014-.164.014-.22.096-.068.1-.137.205-.178.314-.164.37-.164.342.232.396.328.055.642.082.957.178.287.096.492.26.56.574.027.15.055 4.96.055 7.202l-.055 1.6c-.014.123-.027.246-.068.355-.055.164-.15.3-.314.37a1.62 1.62 0 0 1-.574.15c-.37.04-.424.055-.547.465l-.04.15c-.027.178-.014.205.164.205l4.086.04 1.6-.027 1.107-.137c1.257-.232 2.378-.752 3.334-1.585a5.55 5.55 0 0 0 1.312-1.722c.383-.765.547-1.6.588-2.446.068-.478.04-.97-.04-1.462zm-1.982 1.94c-.055.875-.232 1.722-.683 2.487-.574.998-1.394 1.695-2.528 1.94-.492.1-.984.15-1.5.082-.37-.04-.724-.082-1.066-.205-.615-.22-.834-.6-.847-1.2l-.014-8.24c0-.492.22-.6.574-.615.533-.04 1.08-.027 1.613.027a6.06 6.06 0 0 1 1.654.4 3.98 3.98 0 0 1 1.08.67c.738.63 1.23 1.42 1.5 2.35.22.752.26 1.517.22 2.282zm13.34 1.34c0-.082 0-.15-.014-.232-.123-.752-.52-1.326-1.134-1.763-.396-.287-.847-.478-1.312-.615-.082-.027-.15-.055-.232-.068.014-.068.055-.082.096-.096.273-.137.533-.287.765-.492.424-.355.7-.793.847-1.326.082-.287.082-.574.055-.875a2.35 2.35 0 0 0-.998-1.777c-.63-.465-1.367-.656-2.132-.67-1.476-.027-2.965 0-4.44 0-.424 0-.847.027-1.285-.04-.082-.014-.2-.04-.26.055-.1.178-.22.355-.26.56-.014.096.014.15.123.164l.943.137c.37.055.63.26.656.588a5.78 5.78 0 0 1 .04.683l-.027 2.555-.014 5.056c0 .3-.04.588-.096.888a.5.5 0 0 1-.355.41c-.273.082-.533.164-.82.164a.34.34 0 0 0-.355.232c-.055.123-.1.26-.123.383-.027.164.014.22.178.2.123-.014 4.633.096 5.48.014.506-.055 1-.123 1.503-.273.86-.273 1.654-.67 2.282-1.34.52-.547.82-1.203.847-1.968.04-.178.04-.355.04-.547zm-6.628-5.6l.04-1.093c0-.205.082-.3.287-.342.328-.068.656-.04.984-.027.328.027.642.068.97.164.6.178 1.066.52 1.34 1.093a1.96 1.96 0 0 1 .191.834c.014.383-.014.752-.164 1.12-.232.506-.6.834-1.134.93s-2.05.055-2.282.055c-.205 0-.22-.027-.22-.232V28.83a8.79 8.79 0 0 1-.014-1.203zm4.44 7.352c-.232.615-.656 1.04-1.257 1.27-.328.123-.656.2-1 .178-.424-.014-.847 0-1.27-.082-.574-.123-.834-.67-.875-1.066-.068-.697-.027-1.408-.04-1.927v-1.804c0-.22.027-.287.26-.287l1.285.014.875.1c.615.137 1.175.37 1.613.847.355.383.547.847.588 1.353.04.478.014.943-.164 1.394z"
                fill="#c2bfbf"
              />
              <path
                d="M77.95 30.85l.355.055c.383.014.834-.123.97-.656a1.38 1.38 0 0 0 0-.78c-.082 0-.123.068-.164.096-.205.164-.437.26-.683.287-.492.055-.984.027-1.462-.15l-.67-.232a3.95 3.95 0 0 0-1.45-.19c-.697.055-1.353.287-1.968.615-.656.355-1.12.888-1.34 1.613-.123.424-.137.86-.082 1.298.137.998.656 1.695 1.585 2.064.055.014.096.04.15.055.123.068.137.137.027.232l-.342.232-.82.506c-.205.123-.232.22-.164.437a1.43 1.43 0 0 0 .437.656 2.28 2.28 0 0 0 .629.383c.15.068.15.1.014.22l-.78.56c-.26.2-.52.4-.738.656a1.35 1.35 0 0 0-.328 1.23 2.31 2.31 0 0 0 .71 1.23 2.9 2.9 0 0 0 1.257.683c.765.22 1.558.232 2.337.082 1.12-.205 2.1-.7 2.87-1.544.533-.56.847-1.216.875-2a1.92 1.92 0 0 0-1.476-1.995l-.738-.137-2.255-.2c-.246-.014-.492-.055-.697-.178-.26-.164-.328-.478-.164-.683.123-.15.273-.246.465-.26l.437-.04a3.96 3.96 0 0 0 2.309-1.052 2.42 2.42 0 0 0 .697-1.162c.164-.588.164-1.2.027-1.8-.04-.15-.027-.164.164-.137zm-3.35 6.807c.082.014.164 0 .246 0 .574.027 1.162.068 1.722.22a3.58 3.58 0 0 1 .533.205c.547.3.752.82.683 1.38-.082.615-.424 1.052-.957 1.34-.355.2-.752.287-1.162.328-.15.014-.287 0-.437 0-.478.014-.943-.04-1.394-.232-.314-.123-.574-.3-.806-.547-.478-.478-.7-1.353.014-2.064.437-.4.93-.683 1.558-.63zm1.558-4.264c-.287.724-.916.943-1.544.847-.574-.082-.998-.396-1.27-.916-.355-.697-.45-1.42-.246-2.173.15-.56.492-.984 1.093-1.08.765-.137 1.5.137 1.886.902.2.37.287.82.287 1.462-.014.26-.068.615-.205.957zm-17.218-.93c-.123-.738-.396-1.408-.902-1.968-.752-.834-1.708-1.2-2.788-1.203-.943-.014-1.83.26-2.624.752a3.56 3.56 0 0 0-1.599 2.091c-.232.793-.22 1.6-.04 2.405.478 2.16 2.146 3.088 4.14 2.952.588-.04 1.148-.232 1.68-.492.793-.37 1.367-.957 1.763-1.736.314-.642.45-1.326.437-2.105l-.068-.697zM57 35.497a1.66 1.66 0 0 1-1.408 1.148c-.6.082-1.162-.068-1.667-.424a2.84 2.84 0 0 1-.861-1.025c-.56-1.148-.656-2.35-.37-3.58a2.05 2.05 0 0 1 .574-.998c.506-.465 1.093-.574 1.75-.437.63.137 1.107.478 1.5.998s.574 1.12.683 1.75c.055.314.055.642.068.847 0 .656-.055 1.2-.26 1.722zm31.8-2.924c-.1-.793-.396-1.517-.957-2.118-.738-.806-1.695-1.148-2.76-1.162-.916-.014-1.763.246-2.542.697-.875.52-1.476 1.257-1.708 2.255a4.77 4.77 0 0 0 .328 3.252c.45.957 1.216 1.572 2.228 1.845 1.12.3 2.187.164 3.225-.342.902-.437 1.544-1.12 1.913-2.05.22-.547.3-1.134.314-1.818.014-.123-.014-.342-.04-.56zm-1.886 2.747c-.22.738-.683 1.216-1.462 1.326-.574.082-1.12-.055-1.613-.383-.424-.287-.724-.67-.943-1.12-.246-.478-.383-.984-.437-1.503-.082-.642-.082-1.27.068-1.913a1.95 1.95 0 0 1 .123-.369c.383-.957 1.23-1.394 2.228-1.175.67.15 1.175.52 1.558 1.08.37.547.547 1.148.63 1.8.04.26.055.533.04.765 0 .533-.04 1.025-.2 1.503z"
                fill="#47474a"
              />
            </g>
          </svg>

           MySQL 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="60"
            viewBox="0 0 9.252 4.626"
          >
            <g
              transform="matrix(.037376 0 0 .037376 1.069994 -1.319339)"
              fillRule="evenodd"
            >
              <path
                d="M8.504 128.215h5.8v-22.977l9.058 20.033c1.026 2.408 2.5 3.3 5.354 3.3s4.24-.893 5.3-3.3l9.013-20.033v22.977h5.845v-22.977c0-2.23-.893-3.303-2.767-3.883-4.417-1.338-7.362-.178-8.7 2.81l-8.878 19.81-8.567-19.81c-1.294-2.988-4.284-4.148-8.745-2.81-1.83.58-2.722 1.652-2.722 3.883l-.001 22.977zm45.198-18.694h5.845v12.627c-.044.713.223 2.32 3.4 2.363 1.65.045 12.582 0 12.67 0v-15.08h5.845v20.658c0 5.086-6.3 6.2-9.236 6.246h-18.38v-3.88h18.427c3.748-.402 3.302-2.275 3.302-2.9v-1.518h-12.36c-5.756-.045-9.46-2.588-9.503-5.488v-13.03zm125.374-14.635c-3.568-.09-6.336.268-8.656 1.25-.668.27-1.74.27-1.828 1.116.357.355.4.936.713 1.428.535.893 1.473 2.096 2.32 2.72.938.715 1.875 1.428 2.855 2.053 1.74 1.07 3.703 1.695 5.398 2.766.982.625 1.963 1.428 2.945 2.098.5.357.803.938 1.428 1.16v-.135c-.312-.4-.402-.98-.713-1.428-.447-.445-.893-.848-1.34-1.293-1.293-1.74-2.9-3.258-4.64-4.506-1.428-.982-4.55-2.32-5.13-3.97l-.088-.09c.98-.09 2.14-.447 3.078-.715 1.518-.4 2.9-.312 4.46-.713.715-.18 1.428-.402 2.143-.625v-.4c-.803-.803-1.383-1.874-2.23-2.632-2.275-1.963-4.775-3.882-7.363-5.488-1.383-.892-3.168-1.473-4.64-2.23-.537-.268-1.428-.402-1.74-.848-.805-.98-1.25-2.275-1.83-3.436-1.293-2.454-2.543-5.175-3.658-7.763-.803-1.74-1.295-3.48-2.275-5.086-4.596-7.585-9.594-12.18-17.268-16.687-1.65-.937-3.613-1.34-5.7-1.83l-3.346-.18c-.715-.312-1.428-1.16-2.053-1.562-2.543-1.606-9.102-5.086-10.977-.49-1.205 2.9 1.785 5.755 2.8 7.228.76 1.026 1.74 2.186 2.277 3.346.3.758.4 1.562.713 2.365.713 1.963 1.383 4.15 2.32 5.98.5.937 1.025 1.92 1.65 2.767.357.49.982.714 1.115 1.517-.625.893-.668 2.23-1.025 3.347-1.607 5.042-.982 11.288 1.293 14.99.715 1.115 2.4 3.57 4.686 2.632 2.008-.803 1.56-3.346 2.14-5.577.135-.535.045-.892.312-1.25v.09l1.83 3.703c1.383 2.186 3.793 4.462 5.8 5.98 1.07.803 1.918 2.187 3.256 2.677v-.135h-.088c-.268-.4-.67-.58-1.027-.892-.803-.803-1.695-1.785-2.32-2.677-1.873-2.498-3.523-5.265-4.996-8.12-.715-1.383-1.34-2.9-1.918-4.283-.27-.536-.27-1.34-.715-1.606-.67.98-1.65 1.83-2.143 3.034-.848 1.918-.936 4.283-1.248 6.737-.18.045-.1 0-.18.09-1.426-.356-1.918-1.83-2.453-3.078-1.338-3.168-1.562-8.254-.402-11.913.312-.937 1.652-3.882 1.117-4.774-.27-.848-1.16-1.338-1.652-2.008-.58-.848-1.203-1.918-1.605-2.855-1.07-2.5-1.605-5.265-2.766-7.764-.537-1.16-1.473-2.365-2.232-3.435-.848-1.205-1.783-2.053-2.453-3.48-.223-.49-.535-1.294-.178-1.83.088-.357.268-.49.623-.58.58-.49 2.232.134 2.812.4 1.65.67 3.033 1.294 4.416 2.23.625.446 1.295 1.294 2.098 1.518h.938c1.428.312 3.033.09 4.37.49 2.365.76 4.506 1.874 6.426 3.08 5.844 3.703 10.664 8.968 13.92 15.26.535 1.026.758 1.963 1.25 3.034.938 2.187 2.098 4.417 3.033 6.56.938 2.097 1.83 4.24 3.168 5.98.67.937 3.346 1.427 4.55 1.918.893.4 2.275.76 3.08 1.25 1.516.937 3.033 2.008 4.46 3.034.713.534 2.945 1.65 3.078 2.54zm-45.5-38.772a7.09 7.09 0 0 0-1.828.223v.09h.088c.357.714.982 1.205 1.428 1.83l1.027 2.142.088-.09c.625-.446.938-1.16.938-2.23-.268-.312-.312-.625-.535-.937-.268-.446-.848-.67-1.206-1.026z"
                fill="#00678c"
              />
              <path
                d="M85.916 128.215h16.776c1.963 0 3.838-.4 5.354-1.115 2.543-1.16 3.748-2.72 3.748-4.773v-4.283c0-1.65-1.383-3.213-4.148-4.283-1.428-.535-3.213-.848-4.953-.848h-7.05c-2.365 0-3.48-.715-3.793-2.275-.044-.178-.044-.357-.044-.535v-2.633c0-.135 0-.312.044-.49.312-1.205.937-1.518 3-1.74h17.177v-3.883h-16.33c-2.365 0-3.614.135-4.73.492-3.436 1.07-4.953 2.766-4.953 5.754v3.393c0 2.63 2.945 4.863 7.942 5.398.535.045 1.115.045 1.695.045h6.024c.223 0 .445 0 .623.045 1.83.178 2.633.49 3.168 1.158.357.357.447.67.447 1.072v3.39c0 .4-.268.938-.803 1.383s-1.385.758-2.5.803c-.223 0-.355.045-.58.045H85.916zm62.195-6.736c0 3.97 3 6.2 8.97 6.648.58.045 1.115.088 1.695.088h15.17v-3.88h-15.303c-3.393 0-4.686-.848-4.686-2.9v-20.078H148.1v20.123zm-32.615.177v-13.83c0-3.525 2.498-5.668 7.363-6.336.535-.045 1.07-.09 1.56-.09h11.064c.58 0 1.072.045 1.652.09 4.863.668 7.316 2.81 7.316 6.336v13.83c0 2.855-1.025 4.373-3.436 5.4l5.71 5.174h-6.736l-4.64-4.193-4.686.268h-6.246a13.66 13.66 0 0 1-3.391-.445c-3.7-1.028-5.53-2.99-5.53-6.204zm6.29-.31c0 .178.1.355.135.58.312 1.605 1.828 2.498 4.148 2.498h5.266l-4.818-4.373h6.736l4.238 3.838c.805-.447 1.295-1.072 1.473-1.875.045-.178.045-.4.045-.58v-13.252c0-.178 0-.355-.045-.535-.312-1.516-1.828-2.363-4.104-2.363h-8.79c-2.588 0-4.283 1.115-4.283 2.898z"
                fill="#ce8b2c"
              />
            </g>
          </svg>
        </div>
      </div>*/