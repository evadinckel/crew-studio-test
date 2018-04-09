import React from 'react';


const SlideOne= (props) => {

  let background = {
      backgoundImage: 'url(Alan_Berryhill.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
  }




  return <div style={background} className="slide"></div>
}

export default SlideOne;
