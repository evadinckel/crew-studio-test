import React, { Component } from 'react';
import SlideOne from './slideOne';
import SlideTwo from './slideTwo';
import SlideThree from './slideThree';
import SlideFour from './slideFour';


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    slideCount : 1
  }

}




render() {

  return (
  <div className="App">
    { this.state.slideCount === 1 ? <SlideOne /> : null }
    { this.state.slideCount === 2 ? <SlideTwo /> : null }
    { this.state.slideCount === 3 ? <SlideThree /> : null }
    { this.state.slideCount === 4 ? <SlideFour /> : null }
  </div>
    );


  }
}







export default App;
