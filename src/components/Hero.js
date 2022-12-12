import React from "react";
import './hero.css';
import Floppy from "./Floppy";

function Hero({floppyClick,screenClick}) {

    return (
        <div className="hero">
            <h1>William Wheeler
            <p>/ / / / Web Developer</p>
            </h1>
            <div className="illustrationContainer">
                {/* <img src={stripeIllustration}></img> */}
            </div>
            <div className="floppyContainer">
                <Floppy floppyName={"floppy1"} labelInfo={"ABOUT"} xPercent={"24%"} optionClick={floppyClick}/>
                <Floppy floppyName={"floppy2"} labelInfo={"SKILLS"} xPercent={"24%"} optionClick={floppyClick}/>
                <Floppy floppyName={"floppy3"} labelInfo={"PROJECTS"} xPercent={"14%"} optionClick={floppyClick}/>
            </div>
        </div>
    );
}

export default Hero;