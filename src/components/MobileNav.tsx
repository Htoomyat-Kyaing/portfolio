import { cn } from "../util/cn";

const MobileNav = ({
  mobileNav,
  closeMobileNav,
}: {
  mobileNav: boolean;
  closeMobileNav(): void;
}) => {
  return (
    <nav
      className={cn(
        "fixed top-0 z-40 flex flex-col justify-center w-4/5 min-h-screen transition-all duration-500 ease-in-out md:hidden bg-violet-600 ",
        mobileNav ? "translate-x-0" : "-translate-x-full"
      )}
    >
      {/* check custom functions in tailwind.config */}
      <ul className="flex flex-col justify-center items-center gap-4 child:cursor-pointer child:relative child:before:absolute child:before:content-[''] child:before:-bottom-1 child:before:w-2 child:before:h-0.5 child:before:bg-slate-100  child:before:ease-in-out child:delay-150 child:before:-translate-x-4 child:before:transition child:before:duration-300 child:before:opacity-0 child-hover:before:hover:w-full child-hover:before:hover:translate-x-0 child-hover:before:hover:opacity-100">
        <a href="#skills" onClick={() => closeMobileNav()}>
          <li>Skills</li>
        </a>
        <a href="#projects" onClick={() => closeMobileNav()}>
          <li>Projects</li>
        </a>
        <a href="#work-experience" onClick={() => closeMobileNav()}>
          <li>Work Experience</li>
        </a>
        <a href="#contact-me" onClick={() => closeMobileNav()}>
          <li>Contact Me</li>
        </a>
      </ul>
    </nav>
  );
};

export default MobileNav;
