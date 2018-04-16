import React from 'react';



const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <p className="fa fa-arrow-left fa-2x" aria-hidden="true">Left</p>
    </div>
  );
}

export default LeftArrow;
