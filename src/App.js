import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Tokyoish</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link disabled" href="#">Words</a>
              <a className="nav-item nav-link disabled" href="#">Hiragana</a>
              <a className="nav-item nav-link disabled" href="#">Katakana</a>
              <a className="nav-item nav-link disabled" href="#">Kanji</a>
            </div>
          </div>
        </nav>
        <div className="jumbotron">
          <h1 className="display-4">Going to Japan?</h1>
          <p className="lead">Let's brush up on your Japanese.</p>
          <p className="lead">
            <a className="btn btn-primary" href="#" role="button">Get Started</a>
          </p>
        </div>

    </div>
    );
  }
}

export default App;
