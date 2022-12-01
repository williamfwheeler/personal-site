import React, {useState,useEffect} from "react";
import './nav.css';
import gear from '../assets/gear_image.png';

function Nav() {

    const [scrollClass,setScrollClass] = useState('beforeScroll');

    const handleHome = () => {
        window.scrollTo({
            behavior: 'smooth',
            top:0
            });
    }

    const listenScrollEvent = (e) => {
        if (window.scrollY > 400) {
          setScrollClass('afterScroll');
        } else {
            setScrollClass('beforeScroll');
        }
        console.log(window.scrollY)
      }

    window.addEventListener('scroll',listenScrollEvent)

    return (
        <div className={`navBar ${scrollClass}`}>
            <button className={`titleButton ${scrollClass}`} onClick={handleHome}>
                <div className="siteName">WW Workshop</div>
            </button>
            <button className="homeButton" onClick={handleHome}>
                <div className="mainLogo"><img src={gear} alt="spinning gear"></img></div>
            </button>
            <div className="links">
                <div>About</div>
                <div>Skills</div>
                <div>Projects</div>
            </div>
        </div>
    );
}

export default Nav;