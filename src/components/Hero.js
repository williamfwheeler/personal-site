import React from "react";
import './hero.css';

function Hero() {

    return (
        <div className="hero">
            <h1>Hero</h1>
            <div className="illustrationContainer">

                <svg>
                    {/* <circle className="circle1" r="50" cx="100" cy="80"></circle>
                    <circle className="circle2" r="50" cx="100" cy="80"></circle>
           

                    <path d="M 40 10 h 90 v 80 z" fill="transparent"/> */}

                    <path className="outer3" 
                    d="M -80 310 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    <path className="outer3" 
                    d="M 0 490 h 480 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                     <path className="outer2" 
                    d="M -60 350 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    <path className="outer2" 
                    d="M 0 450 h 450 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    <path className="outer1" 
                    d="M -30 380 h 410 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    <path className="outer1" 
                    d="M 0 425 h 420 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    <path className="main" 
                    d="M 0 400 h 400 s 150 00, 150 -150
                    s 150 -150 , 150 -150
                    h 1300" 
                    fill="transparent"/>

                    
                </svg>


            </div>

        </div>
    );
}

export default Hero;