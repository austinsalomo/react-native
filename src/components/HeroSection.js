import React from "react";
import myVideo from "../videos/video-3.mp4";
import '../components/HeroSection.css';
import '../App.css';
import { Button } from './button';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={myVideo} autoPlay loop muted />
        <h1>Smell Code</h1>
        <p>Belajar Mengenai Smell Code</p>
        <div className="hero-btns">
      
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            to="/dispensables"
          >
            Dispensables
          </Button>
         
        
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            to="/change-preventer"
          >
            Change Preventer
          </Button>
  
        </div>
      
    </div>
  );
}

export default HeroSection;
