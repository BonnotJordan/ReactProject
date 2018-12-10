import React, { Component } from 'react';
import logo from './marvel_logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="help">Select one category to have access to amazing content</p>
        </header>
          <button type="button" className="button">Characters</button>
          <button type="button" className="button">Comics</button>
          <button type="button" className="button">Creators</button>
          <button type="button" className="button">Events</button>
          <button type="button" className="button">Series</button>
          <button type="button" className="button">Stories</button>
        <footer>
           <p className="help">Posted by: Gosse Brandon & Bonnot Jordan</p>
           <p className="help">Github link: <a href="https://github.com/BonnotJordan/ReactProject">
           Github Project Marvel</a>.</p>
       </footer>
      </div>
    );
  }

}

export default App;
