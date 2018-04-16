import React from 'react';




const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <p className="fa fa-arrow-right fa-2x" aria-hidden="true">Right</p>
    </div>
  );
}

export default RightArrow;
