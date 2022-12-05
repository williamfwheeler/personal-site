import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function App() {

  const [screenChoice,setScreenChoice] = useState("");

  const handleScreenChoice = (choice) => {
    if (choice === "ABOUT") {
      setScreenChoice("aboutClick")
    }
    else if (choice === "PROJECTS") {
      setScreenChoice("projectsClick")
    }
    else if (choice === "SKILLS") {
      setScreenChoice("skillsClick")
    }
  }

  const handleEject = () => {
    setScreenChoice("");
  }

  return (
    <div className="App">
      <Nav />
      <div className='bodyContainer'>
        <Hero floppyClick={handleScreenChoice}/>
        <Terminal screenClick={screenChoice} ejectClick={handleEject} floppyClick={handleScreenChoice}/>
        {/* <About /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
