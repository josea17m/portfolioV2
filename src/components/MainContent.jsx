import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

const MainContent = () => {

  return (
    <div
      id="about"
      className="lg:pt-24 px-10 w-full lg:w-7/12 md:w-7/12 absolute right-0 bg-slate-900"
    >
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainContent;
