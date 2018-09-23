import React, { Component } from 'react';
import logo from './logo.svg';
import purple from './purple-09.svg';
import title_heart from './title_heart.svg';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';


import Infographic from './Infographic';

class App extends Component {
  render() {
    return (
      <body>
      <div className="App">
        <ParallaxProvider>
        <div>
          <Infographic />
        </div>
      </ParallaxProvider>
      </div>
    </body>
    );
  }
}

export default App;
