const ProjectCard = ({
  websiteSnapshot,
  githubUrl,
  netlifyUrl,
}: {
  websiteSnapshot: string;
  githubUrl: string;
  netlifyUrl: string;
}) => {
  return (
    <div className="relative h-full border-2 rounded-lg w-80 border-violet-500 transition-all *:transition-all hover:scale-105 ease-in-out duration-500">
      <img
        className="rounded-lg hover:opacity-70 opacity-30"
        src={websiteSnapshot}
        alt=""
      />
      <div className="absolute flex items-center w-full gap-2 translate-x-1/2 justify-evenly right-1/2 top-1/2">
        <a
          href={githubUrl}
          className="w-8 hover:cursor-pointer"
          target="_blank"
        >
          <img
            className="w-8 duration-150 ease-in-out hover:scale-125"
            src="/logos/github.svg"
            alt="github.svg"
          />
        </a>
        <a href={netlifyUrl} target="_blank">
          <img
            className="w-8 duration-150 ease-in-out hover:scale-125"
            src="https://skillicons.dev/icons?i=netlify"
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
