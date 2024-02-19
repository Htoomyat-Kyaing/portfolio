import { useState } from "react";

const Skills = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-start min-w-full min-h-full scroll-mt-16"
    >
      <div className="container flex flex-col gap-4 p-4 min-h-fit">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-full gap-4 rounded-lg *:transition-all">
          <div
            className="relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-500 hover:bg-opacity-50"
            onClick={() => setSelected(0)}
          >
            <img className="w-8 h-8 " src="/icons/Languages.svg" alt="" />
            <p>Languages</p>
          </div>

          <div
            className="relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-500 hover:bg-opacity-50"
            onClick={() => setSelected(1)}
          >
            <img className="w-8 h-8 " src="/icons/Frameworks.svg" alt="" />
            <p>Frameworks</p>
          </div>
          <div
            className="relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-500 hover:bg-opacity-50"
            onClick={() => setSelected(2)}
          >
            <img className="w-8 h-8 " src="/icons/Tools.svg" alt="" />
            <p>Tools</p>
          </div>
        </div>

        <div className="flex flex-col items-center self-center h-full p-4 *:transition-all border rounded-lg w-full border-violet-600">
          {selected === 0 && (
            <div className="flex w-full h-full opacity-100 justify-evenly">
              <img src="https://skillicons.dev/icons?i=html" />
              <img src="https://skillicons.dev/icons?i=css" />
              <img src="https://skillicons.dev/icons?i=js" />
              <img src="https://skillicons.dev/icons?i=ts" />
            </div>
          )}

          {selected === 1 && (
            <div className="flex w-full h-full opacity-100 justify-evenly">
              <img src="https://skillicons.dev/icons?i=tailwind" />
              <img src="https://skillicons.dev/icons?i=react" />
              <img src="https://skillicons.dev/icons?i=redux" />
              <img src="https://skillicons.dev/icons?i=supabase" />
            </div>
          )}

          {selected === 2 && (
            <div className="flex w-full h-full opacity-100 justify-evenly">
              <img src="https://skillicons.dev/icons?i=git" />
              <img src="https://skillicons.dev/icons?i=github" />
              <img src="https://skillicons.dev/icons?i=vscode" />
              <img src="https://skillicons.dev/icons?i=netlify" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
