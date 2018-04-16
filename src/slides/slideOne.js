import React from 'react';
import '../styling/slides.css';
import Image from "../Alan_Berryhill.jpg"

const SlideOne= (props) => {

  let background = {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 400
  }


  return <div style={background} className="slide"></div>
}




export default SlideOne;
