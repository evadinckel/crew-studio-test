import React from 'react';
import '../styling/slides.css'
import Image from "../pictures/Allyson_Brar.jpg"

const SlideTwo= (props) => {

  let background = {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: 400
  }




  return <div style={background} className="slide"></div>
}

export default SlideTwo;
