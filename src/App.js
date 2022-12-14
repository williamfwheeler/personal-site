import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Terminal from './components/Terminal';

function App() {

  const [screenChoice,setScreenChoice] = useState("blank");

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
    else if (choice === "CONTACT") {
      setScreenChoice("contactClick")
    }
  }

  const handleEject = () => {
    setScreenChoice("blank");
  }

  return (
    <div className="App">
      <Nav floppyClick={handleScreenChoice}/>
      <div className='bodyContainer'>
        <Hero floppyClick={handleScreenChoice} screenClick={screenChoice}/>
        <Terminal screenClick={screenChoice} ejectClick={handleEject} floppyClick={handleScreenChoice}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
