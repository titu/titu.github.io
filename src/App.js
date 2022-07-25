import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <NavBar />
      <div className="striped">
        <Home />
        <About />
        <Skills />
        <div id="projects" className="scroll-mt-16 snap-start">
          <h1>Projects</h1>
          <br />
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
