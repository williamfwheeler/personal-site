import React from "react";
import gitHub from '../assets/gitHubFooter.svg';
import linkedIn from '../assets/linkedInFooter.svg';
import './footer.css';
// import bracket from '../assets/bracketFooter.svg';

function Footer() {

    return (
        <div className="footer">
            <div className="footerIcon">
                <a href="https://www.linkedin.com/in/william-wheeler-ww/">
                    <img src={linkedIn} alt="LinkedIn icon" />
                </a>
            </div>
            <div className="footerIcon">
                <a href="https://github.com/williamfwheeler">
                    <img src={gitHub} alt="gitHub icon" />
                </a>
            </div>
        </div>
    );
}

export default Footer;