import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='bodyContainer'>
        <Hero />
        <Terminal />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
