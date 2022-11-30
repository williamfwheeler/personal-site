import React from "react";
import './hero.css';
import Floppy from "./Floppy";

function Hero() {

    return (
        <div className="hero">
            <div className="illustrationContainer">
                <svg className="stripeIllustration">
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
                </svg>
            </div>
            <Floppy floppyName={"floppy1"} labelInfo={"ABOUT"} xPercent={"24%"}/>
            <Floppy floppyName={"floppy2"} labelInfo={"SKILLS"} xPercent={"24%"}/>
            <Floppy floppyName={"floppy3"} labelInfo={"PROJECTS"} xPercent={"14%"}/>
        </div>
    );
}

export default Hero;