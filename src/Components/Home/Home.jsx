import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="heroContainer">
      <video autoPlay muted loop className="heroVideo">
        <source src="https://treehouseluxuryvacations.com/images/tour.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="heroOverlay"></div>
      <div className="heroContent">
        <h1>Explore Exotic Locations</h1>
        <p>Luxury vacations crafted for unforgettable experiences</p>
        <button>Find a Place</button>
      </div>
    </div>
  );
};

export default Hero;
