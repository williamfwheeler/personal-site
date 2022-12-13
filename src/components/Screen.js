import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function Screen({screenInput}) {  

    const renderScreen = () => {
        if (screenInput === 'skillsClick') {
            return (<Skills />)
        }
        else if (screenInput === 'aboutClick') {
            return (<About />)
        }
        else if (screenInput === 'projectsClick') {
            return (<Projects />)
        }
        else if (screenInput === 'contactClick') {
            return (<Contact />)
        }
    }
  
    return (
        <div>
            {renderScreen()}
        </div>
    );
  }
    
export default Screen;