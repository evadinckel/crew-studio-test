import React from 'react';
import './App.css';

class App extends React.Component {





render() {

  return (
  <div className="App">
    <div className = "App-intro"><p>Awesome picture gallery</p></div>
      <div><img src={require('./1 Alan Berryhill 2018-04-17 person, outdoors, rain.jpg')} /></div>
      <div><img src={require('./2 Allyson Brar 2018-04-19 person, hands, paints.jpg')} /></div>
      <div><img src={require('./3 Alvera Tinker 2018-05-09 objects, paints, from-above.jpg')} /></div>
  </div>
    );


  }
}







export default App;
