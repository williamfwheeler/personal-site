import React from "react";
import './nav.css';
import gear from '../assets/gear_image.png';

function Nav() {

    return (
        <div className="navBar">
            <div className="siteName">WW Workshop</div>
            <div className="mainLogo"><img src={gear}></img></div>
            <div className="links">
                <div>About</div>
                <div>Skills</div>
                <div>Projects</div>
            </div>
        </div>
    );
}

export default Nav;