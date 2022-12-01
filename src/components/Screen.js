import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

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
    }
  
    return (
        <div>
            {renderScreen()}
        </div>
    );
  }
    
export default Screen;