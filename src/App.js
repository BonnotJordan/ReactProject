import React from 'react';
import logo from './marvel_logo.svg';
import './App.css';
import List from './List'

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedButtonId: 0
    }
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }


/*handleChange(){

}*/



  handleClick(e) {
    e.preventDefault();
    //console.log("Item clicked : " + e.currentTarget.lastChild.data);
    /*if(e.currentTarget.lastChild.data === "Characters"){
      console.log("Vous allez récupérer des Characters");
      this.state.selectedButtonId = 0
    } else if (e.currentTarget.lastChild.data === "Comics") {
      console.log("Vous allez récupérer des Comics");
      this.state.selectedButtonId = 1
    } else if (e.currentTarget.lastChild.data === "Creators") {
      console.log("Vous allez récupérer des Creators");
      this.state.selectedButtonId = 2
    } else if (e.currentTarget.lastChild.data === "Events") {
      console.log("Vous allez récupérer des Events");
      this.state.selectedButtonId = 3
    } else if (e.currentTarget.lastChild.data === "Series") {
      console.log("Vous allez récupérer des Series");
      this.state.selectedButtonId = 4
    } else if (e.currentTarget.lastChild.data === "Stories") {
      console.log("Vous allez récupérer des Stories");
      this.state.selectedButtonId = 5
    }*/
  };


  render() {
    return (

      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="help">Search something by tiping it on the search bar or use the list</p>
        </header>
       
       <List className="itsaList"/>
       <footer className="App-footer">
           <p className="help">Posted by: Gosse Brandon & Bonnot Jordan</p>
           <p className="help">Github link: <a href="https://github.com/BonnotJordan/ReactProject">
           Github Project Marvel</a>.</p>
       </footer>
      </div>
    );
    
  }

}



export default App


/*<div className="Buttons">
       <button type="button" className="button" onClick= {this.handleClick}>Characters</button>
          <button type="button" className="button" onClick= {this.handleClick}>Comics</button>
          <button type="button" className="button" onClick= {this.handleClick}>Creators</button>
          <button type="button" className="button" onClick= {this.handleClick}>Events</button>
          <button type="button" className="button" onClick= {this.handleClick}>Series</button>
          <button type="button" className="button" onClick= {this.handleClick}>Stories</button>
       </div>*/