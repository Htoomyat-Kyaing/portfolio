import { useState } from "react";
import { cn } from "../util/cn";

const Skills = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-start min-w-full min-h-full scroll-mt-16"
    >
      <div className="container flex flex-col gap-4 p-4 min-h-fit">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div
          className={cn(
            "flex flex-col md:flex-row justify-center items-center w-full h-full gap-4 rounded-lg *:transition-all"
          )}
        >
          <div
            className={cn(
              "relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-600 ",
              selected === 0 ? "bg-violet-500 bg-opacity-50" : ""
            )}
            onClick={() => setSelected(0)}
          >
            <img className="w-8 h-8 " src="/icons/Languages.svg" alt="" />
            <p>Languages</p>
          </div>

          <div
            className={cn(
              "relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-600 ",
              selected === 1 ? "bg-violet-500 bg-opacity-50" : ""
            )}
            onClick={() => setSelected(1)}
          >
            <img className="w-8 h-8 " src="/icons/Frameworks.svg" alt="" />
            <p>Frameworks</p>
          </div>
          <div
            className={cn(
              "relative flex items-center justify-center w-full h-full gap-4 p-4 border rounded-md border-violet-500 hover:bg-violet-600 ",
              selected === 2 ? "bg-violet-500 duration-200 bg-opacity-50" : ""
            )}
            onClick={() => setSelected(2)}
          >
            <img className="w-8 h-8 " src="/icons/Tools.svg" alt="" />
            <p>Tools</p>
          </div>
        </div>

        <div className="flex relative flex-col items-center self-center h-full p-4 *:transition-all *:duration-300 border rounded-lg w-full border-violet-600">
          <div
            className={cn(
              "absolute flex w-full h-full opacity-100 justify-evenly",
              selected === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            )}
          >
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=html"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=css"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=js"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=ts"
            />
          </div>

          <div
            className={cn(
              "absolute flex w-full h-full opacity-100 justify-evenly",
              selected === 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            )}
          >
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=tailwind"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=react"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=redux"
            />
            <img
              className="w-12 h-fit"
              src="https://skillicons.dev/icons?i=supabase"
            />
          </div>

          <div
            className={cn(
              "flex w-full h-full opacity-100 justify-evenly",
              selected === 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            )}
          >
            <img src="https://skillicons.dev/icons?i=git" />
            <img src="https://skillicons.dev/icons?i=github" />
            <img src="https://skillicons.dev/icons?i=vscode" />
            <img src="https://skillicons.dev/icons?i=netlify" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
