import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VideoJS from './videojs';
import video from './media/NutriYum.mp4'
import poster from './media/NYLogo.png'

const videoJsOptions = {
  autoplay: false,
  controls: true,
  hieght: '10px',
  playbackRates: [0.5, 1, 1.5, 2],
  poster,
  sources: [{
    src: video,
    type: 'video/mp4',
  }, 'https://www.youtube.com/watch?v=LmtWHjlrvF8'
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <VideoJS {...videoJsOptions} />
      </div>
    );
  }
}

export default App;
