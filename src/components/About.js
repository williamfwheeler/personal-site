import React from "react";
import './about.css';

function About() {

    return (
        <div className="about">
            <div className="aboutHeader">
                <h1>About</h1>
                <hr></hr>
                {/* <div className="stripeContainer line">
                    <div className="stripe orange"></div>
                    <div className="stripe redOrange"></div>
                    <div className="stripe navy"></div>
                    <div className="stripe darkBlue"></div>
                </div>     */}
            </div>
            <div className="aboutContent">

                <p>William Wheeler is a Fort Worth-based web developer. With a passion for both coding and problem-solving, William uses his background in data analytics and music to create websites that are functional, fun, and visually appealing.  </p>
                <br></br>    
                <p>In his free time, William enjoys making music and reading about the subjects your grandpa probably likes (boats,plants,history). </p>

                <p className="mobile pageOne">William Wheeler is a Fort Worth-based web developer. With a passion for both coding and problem-solving, William uses his background in data analytics and music to create websites that are functional, fun, and visually appealing.  </p>
                <br className="mobile pageOne"></br>    
                <p className="mobile ">In his free time, William enjoys making music and reading about the subjects your grandpa probably likes (boats,plants,history). </p>

            </div>
        </div>
    );
}

export default About;