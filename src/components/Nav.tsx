import { cn } from "../util/cn";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  function toggleMobileNav(): void {
    setMobileNav((prev) => !prev);
  }
  function closeMobileNav(): void {
    setMobileNav(false);
  }
  return (
    <>
      <nav className="fixed top-0 z-50 flex justify-center min-w-full bg-slate-950 ">
        <div className="container flex justify-between p-4 ">
          <a href="#hero">
            <h1 className="text-2xl font-semibold select-none text-nowrap">
              My Portfolio
            </h1>
          </a>

          {/* check custom functions in tailwind.config */}
          <ul className="hidden md:flex items-center gap-4 child:cursor-pointer child:relative child:before:absolute child:before:content-[''] child:before:-bottom-1 child:before:w-2 child:before:h-0.5 child:before:bg-violet-600  child:before:ease-in-out child:delay-150 child:before:-translate-x-4 child:before:transition child:before:duration-300 child:before:opacity-0 child-hover:before:hover:w-full child-hover:before:hover:translate-x-0 child-hover:before:hover:opacity-100">
            <a href="#skills">
              <li>Skills</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="#contact-me">
              <li>Contact Me</li>
            </a>
          </ul>

          <button
            className={cn(
              "px-2 border-2 flex flex-col items-center justify-center h-full rounded-lg w-9 md:hidden bg-slate-950 border-slate-100  *:hover:text-violet-600 hover:border-violet-600 transition-transform duration-500 ease-in-out *:transition-transform *:duration-500 *:ease-in-out"
            )}
            onClick={() => {
              toggleMobileNav();
            }}
          >
            {mobileNav ? (
              <svg
                className={cn("w-6 h-6", mobileNav ? "inline-block" : "hidden")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="18" y1="6" x2="6" y2="18" />{" "}
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                className={cn(
                  "w-6 h-6",
                  mobileNav ? "opacity-0" : "opacity-100 rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <MobileNav mobileNav={mobileNav} closeMobileNav={closeMobileNav} />
    </>
  );
};

export default Nav;
