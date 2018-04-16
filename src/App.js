import React, { Component } from 'react';
import './styling/app.css';
import SlideOne from './slides/slideOne';
import SlideTwo from './slides/slideTwo';
import SlideThree from './slides/slideThree';
import SlideFour from './slides/slideFour';
import RightArrow from './arrows/rightArrow';
import LeftArrow from './arrows/leftArrow';


class App extends Component {
  constructor(props) {
    super(props);

  this.state = {
    slideCount : 1
 }

  this.nextSlide = this.nextSlide.bind(this);
  this.previousSlide = this.previousSlide.bind(this);

}

  nextSlide() {
      if (this.state.slideCount < 4) {
        this.setState({ slideCount: this.state.slideCount + 1 })
      }

  }

  previousSlide() {
    if (this.state.slideCount > 1) {
      this.setState({ slideCount: this.state.slideCount - 1 })
    }
  }


render() {
  const inlineStyle={
    color:'red'
  }
  return (

    <div style={inlineStyle} className="App">
      { this.state.slideCount === 1 ? <SlideOne /> : null }
      { this.state.slideCount === 2 ? <SlideTwo /> : null }
      { this.state.slideCount === 3 ? <SlideThree /> : null }
      { this.state.slideCount === 4 ? <SlideFour /> : null }
      <RightArrow nextSlide={this.nextSlide} />
      <LeftArrow previousSlide={this.previousSlide} />
    </div>
    );
  }

}

export default App;
