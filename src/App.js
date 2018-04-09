import React, { Component } from 'react';
import SlideOne from './slideOne';
import SlideTwo from './slideTwo';
import SlideThree from './slideThree';
import SlideFour from './slideFour';
import RightArrow from './rightArrow.js';
import leftArrow from './leftArrow.js'


class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    slideCount : 1
  }
  this.nextSlide = this.nextSlide.bind(this);
  this.previousSlide = this.previousSlide.bind(this);

}

render() {

  return (
    <div className="App">
      { this.state.slideCount === 1 ? <SlideOne /> : null }
      { this.state.slideCount === 2 ? <SlideTwo /> : null }
      { this.state.slideCount === 3 ? <SlideThree /> : null }
      { this.state.slideCount === 4 ? <SlideFour /> : null }

<RightArrow nextSlide={this.nextSlide} />
<LeftArrow previousSlide={this.previousSlide} />

    </div>
    );
  }
  nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
  }


}







export default App;
