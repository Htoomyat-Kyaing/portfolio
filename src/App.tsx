import Hero from "./contents/Hero";
import Nav from "./components/Nav";
import Skills from "./contents/Skills";
import Projects from "./contents/Projects";
import ContaceMe from "./contents/ContaceMe";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />

      <Hero />
      <Skills />
      <Projects />
      <ContaceMe />

      <Footer />
    </>
  );
}

export default App;
