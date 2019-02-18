import React from 'react';
import logo from './marvel_logo.svg';
import './App.css';
import List from './List'

class App extends React.Component {
  
  constructor(props) {
    super(props);
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
      
    } else if (e.currentTarget.lastChild.data === "Comics") {
      console.log("Vous allez récupérer des Comics");
    } else if (e.currentTarget.lastChild.data === "Creators") {
      console.log("Vous allez récupérer des Creators");
    } else if (e.currentTarget.lastChild.data === "Events") {
      console.log("Vous allez récupérer des Events");
    } else if (e.currentTarget.lastChild.data === "Series") {
      console.log("Vous allez récupérer des Series");
    } else if (e.currentTarget.lastChild.data === "Stories") {
      console.log("Vous allez récupérer des Stories");
    }*/
  };


  render() {
    return (

      <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="help">Search something by tiping it on the search bar or use the list</p>
        </header>
       <List />
       <footer>
           <p className="help">Posted by: Gosse Brandon & Bonnot Jordan</p>
           <p className="help">Github link: <a href="https://github.com/BonnotJordan/ReactProject">
           Github Project Marvel</a>.</p>
       </footer>
      </div>
    );
    
  }

}



export default App


