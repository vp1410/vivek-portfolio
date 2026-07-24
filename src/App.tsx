import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Impact } from "./components/sections/Impact";
import { Innovation } from "./components/sections/Innovation";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      <main>
        <Hero />
        <Impact />
        <About />
        <Projects />
        <Experience />
        <Innovation />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;