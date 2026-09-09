import Gutter from "./components/Gutter";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="shell">
      <Gutter />

      <main className="content">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTopButton />
    </div>
  );
}

export default App;
