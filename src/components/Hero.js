import React from "react";
import './hero.css';
import Floppy from "./Floppy";

function Hero({floppyClick}) {

    return (
        <div className="hero">
            <h1>William Wheeler
            <p>/ / / / Web Developer</p>
            </h1>
            <div className="illustrationContainer">
                <svg className="stripeIllustration"
                viewBox="180 -00 1300 480"
                >
                    <path className="outer3" 
                    d="M -90 340 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    {/* <path className="outer3" 
                    d="M 0 510 h 480 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/> */}

                     <path className="outer2" 
                    d="M -60 370 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    {/* <path className="outer2" 
                    d="M 0 470 h 450 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/> */}

                    <path className="outer1" 
                    d="M -25 400 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    {/* <path className="outer1" 
                    d="M 0 445 h 420 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/> */}

                    <path className="main" 
                    d="M 0 440 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    {/* <text x="670" y="35">/ / / / Web Developer</text> */}
                </svg>
            </div>
            <Floppy floppyName={"floppy1"} labelInfo={"ABOUT"} xPercent={"24%"} optionClick={floppyClick}/>
            <Floppy floppyName={"floppy2"} labelInfo={"SKILLS"} xPercent={"24%"} optionClick={floppyClick}/>
            <Floppy floppyName={"floppy3"} labelInfo={"PROJECTS"} xPercent={"14%"} optionClick={floppyClick}/>
        </div>
    );
}

export default Hero;