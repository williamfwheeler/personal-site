import React, {useState} from "react";
import './about.css';

function About() {

    const [mobilePage,setMobilePage] = useState("");

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
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet condimentum augue, at luctus turpis porta at. Nullam dapibus eget nulla in vestibulum. </p>
                <br></br>
                <p>Suspendisse potenti. Morbi diam neque, imperdiet ut luctus aliquet, elementum quis elit. In eget vulputate velit, sed ullamcorper velit. Sed sit amet sagittis urna. Cras non congue lorem. Nullam aliquet elit quis augue mattis iaculis. Nam ut bibendum magna. Quisque sed elit urna. Sed eget aliquam ex.</p> */}

                <p>William Wheeler is a Fort Worth-based web developer. With a passion for both coding and problem-solving, William has a unique skill set that allows him to excel at creating user-friendly websites. </p>
                <br></br>    
                <p>Prior to becoming a web developer, he spent several years working for financial service companies, where he honed his ability to analyze large sets of data and identify patterns and trends. Today, he uses his problem-solving expertise to create websites that are both functional and visually appealing. </p>
                <br></br>
                <p>In his free time, William enjoys making music and probably reading about your grandpa's favorite topics.</p>

                <p className="mobile pageOne">William Wheeler is a Fort Worth-based web developer. With a passion for both coding and problem-solving, William has a unique skill set that allows him to excel at creating user-friendly websites. </p>
                <br className="mobile pageOne"></br>    
                <p className="mobile ">Prior to becoming a web developer, he spent several years working for financial service companies, where he honed his ability to analyze large sets of data and identify patterns and trends. Today, he uses his problem-solving expertise to create websites that are both functional and visually appealing. </p>
                <br className="mobile "></br>
                <p className="mobile ">In his free time, William enjoys making music and probably reading about your grandpa's favorite topics.</p>
            </div>
        </div>
    );
}

export default About;