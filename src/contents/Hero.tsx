import ProfilePic from "../assets/My profile pic.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-w-full min-h-screen mt-16 scroll-mt-16"
    >
      <div className="container flex flex-col justify-between items-center gap-4 p-4 md:flex-row before:content-[''] before:w-80 before:h-80 before:bg-violet-600 before:rounded-full before:absolute before:top-0 before:left-0 before:-z-10 before:blur-3xl before:opacity-50 after:content-[''] after:w-80 after:h-80 after:bg-violet-600 after:rounded-full after:absolute after:-z-10 after:blur-3xl after:opacity-50 after:bottom-0 after:right-0">
        <article className="flex flex-col flex-1 max-w-lg min-h-full gap-4 select-none">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Hi! I'm Htoo Myat Kyaing.
          </h2>
          <p className="leading-7">
            I'm a 5th-year university student, pursuing a degree in Computer
            Engineering and Information Technology.
          </p>
        </article>

        <figure className="flex flex-col gap-8 transition-all w-60 md:w-80 h-fit">
          <img
            className="object-contain duration-500 ease-in-out delay-150 rounded-3xl hover:scale-105"
            src={ProfilePic}
            alt="My Profile Pic.jpg"
          />

          <div className="flex justify-between w-full *:transition-all *:delay-150 *:duration-300">
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/facebook.svg"
              alt="facebook.svg"
            />
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/instagram.svg"
              alt="instagram.svg"
            />
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/github.svg"
              alt="github.svg"
            />
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/linked_in.svg"
              alt="linked_in.svg"
            />
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/whatsapp.svg"
              alt="whatsapp.svg"
            />
            <img
              className="w-8 hover:-translate-y-2"
              src="/logos/telegram.svg"
              alt="telegram.svg"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
