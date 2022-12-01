import React from "react";
import './nav.css';
import gear from '../assets/gear_image.png';

function Nav() {

    const handleHome = () => {
        window.scrollTo({
            behavior: 'smooth',
            top:0
            });
    }

    return (
        <div className="navBar">
            <div className="siteName">WW Workshop</div>
            <button class="homeButton" onClick={handleHome}>
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