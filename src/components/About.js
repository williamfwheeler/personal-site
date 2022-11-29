import React from "react";
import './about.css';

function About() {

    return (
        <div className="about">
            <div className="skillsHeader">
                <h1>About</h1>
                <hr></hr>
            </div>
            <div className="stripeContainer">
                <div className="stripe orange"></div>
                <div className="stripe redOrange"></div>
                <div className="stripe navy"></div>
                <div className="stripe darkBlue"></div>
            </div>
        </div>
    );
}

export default About;