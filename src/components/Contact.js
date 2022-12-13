import React from "react";
import './contact.css';
import gitHub from '../assets/gitHub.svg';
import linkedIn from '../assets/linkedIn.svg';
import bracket from '../assets/bracket.svg';

function Contact() {

    return (
        <div className="contact">
            <div className="contactHeader">
                    <h1>Contact</h1>
                    <hr></hr>
            </div>
            <div className="contactContent">
                <div className="contactContainer">
                    <a href="https://www.linkedin.com/in/william-wheeler-ww/">
                        <img src={linkedIn} alt="LinkedIn icon" />
                        <div>LinkedIn</div>
                    </a>
                </div>
                <div className="contactContainer">
                    <a href="https://github.com/williamfwheeler">
                        <img src={gitHub} alt="gitHub icon" />
                        <div>GitHub</div>
                    </a>
                </div>
                <div className="contactContainer">
                    <a href="https://github.com/williamfwheeler/personal-site">
                        <img src={bracket} alt="Application icon" />
                        <div>View this website's code</div>
                    </a>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;





{/* <img src={linkedIn} alt="eject button" /> */}