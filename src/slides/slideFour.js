import React from  'react';
import '../styling/slides.css';
import Image from "../pictures/Alysha_Nakagawa.jpg"


const SlideFour= (props) => {

  let background = {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 400
  };




  return <div style={background} className="slide"></div>
  }

  export default SlideFour;
