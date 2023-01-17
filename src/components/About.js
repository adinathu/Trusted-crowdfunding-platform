import React from "react";
import aboutimage from '../assets/about.png';


const About = () => {
  return (
    <div className="about-container">
      <img src={aboutimage} alt="" />
      <div className="about-data">
        <div className="about-title">ABOUT US</div>
        <div className="about-des">
        Be A Hope is a crowdfunding platform that helps poor people to raise funds for their needs like education, accommodation, medical expenses, and much more. Be A Hope platform utilizes the Tezos blockchain in the backend to handle all types of transactions providing which are currently deployed on jakartanet. The main features which we provide are: the security of funds, authenticity of the users. transparency in transactions and open book accounting which means any donor can see how their funds are used.
        </div>
        <div className="about-btn primary-btn">
          <button><a href="#home">Get Started</a></button>
        </div>
      </div>
    </div>
  );
};

export default About;
