import React, {useState} from "react";
import './nav.css';
import gear from '../assets/gear_image.png';

function Nav({floppyClick}) {

    const [scrollClass,setScrollClass] = useState('beforeScroll');

    const handleHome = () => {
        window.scrollTo({
            behavior: 'smooth',
            top:0
            });
    }

    const listenScrollEvent = (e) => {
        if (window.scrollY > 600) {
          setScrollClass('afterScroll');
        } else {
            setScrollClass('beforeScroll');
        }
      }

    window.addEventListener('scroll',listenScrollEvent)

    const handleClickAbout = () => {
        floppyClick("ABOUT");
        const terminalRef = document.getElementById('floppyClick');
        terminalRef.scrollIntoView({behavior: "smooth"});;
    }

    const handleClickSkills = () => {
        floppyClick("SKILLS");
        const terminalRef = document.getElementById('floppyClick');
        terminalRef.scrollIntoView({behavior: "smooth"});;
    }

    const handleClickContact = () => {
        floppyClick("CONTACT");
        const terminalRef = document.getElementById('floppyClick');
        terminalRef.scrollIntoView({behavior: "smooth"});;
    }

    return (
        <div className={`navBar ${scrollClass}`}>
            <button className={`titleButton ${scrollClass}`} onClick={handleHome}>
                <div className="siteName">WW Workshop</div>
            </button>
            <button className="homeButton" onClick={handleHome}>
                <div className="mainLogo"><img src={gear} alt="spinning gear"></img></div>
            </button>
            <div className="links">
                <button onClick={handleClickAbout} className={`${scrollClass}`}>About</button>
                <button onClick={handleClickSkills} className={`${scrollClass}`}>Skills</button>
                <button onClick={handleClickContact} className={`${scrollClass}`}>Contact</button>
            </div>
        </div>
    );
}

export default Nav;