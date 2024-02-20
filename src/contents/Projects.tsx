import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-start min-w-full min-h-full scroll-mt-16"
    >
      <div className="container flex flex-col gap-4 p-4 min-h-fit">
        <h2 className="text-xl font-semibold">Projects</h2>

        <div className="relative flex flex-wrap justify-center w-full gap-4 md:justify-evenly">
          <ProjectCard
            websiteSnapshot="/website snapshots/redux.netlify.app_.png"
            githubUrl="https://github.com/Htoomyat-Kyaing/react-redux"
            netlifyUrl="https://clever-palmier-d770b4.netlify.app/"
          />
          <ProjectCard
            websiteSnapshot="/website snapshots/integrated-design-project.netlify.app_.png"
            githubUrl="https://github.com/Htoomyat-Kyaing/integrated-design-project"
            netlifyUrl="https://integrated-design-project.netlify.app/"
          />
          <ProjectCard
            websiteSnapshot="/website snapshots/tailwind-tutorial.netlify.app_.png"
            githubUrl="https://github.com/Htoomyat-Kyaing/react-redux"
            netlifyUrl="https://clever-palmier-d770b4.netlify.app/"
          />
          <ProjectCard
            websiteSnapshot="/website snapshots/free_library.png"
            githubUrl="https://github.com/Htoomyat-Kyaing/free-library"
            netlifyUrl="https://comforting-strudel-a45de7.netlify.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
