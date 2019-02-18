import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from "@material-ui/core/ListItem"
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import './List.css';

var numberOfResult = 0;

function createList(data) {
  console.log(numberOfResult)
  var all = [];
for(var i=0;i<numberOfResult;i++){
  console.log(i)
  console.log(data.data.results[i].name)
  const element = <ListItem button><ListItemText primary={data.data.results[i].name}></ListItemText></ListItem>;
  all.push(element)
}
ReactDOM.render(all, document.getElementById('List'));
}

function loadAllCharacters()  {
  
  var urlDefault = "http://gateway.marvel.com/v1/public/characters?apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
  
  fetch(urlDefault)
  .then(response => response.json())
      .then(data => {
          console.log(data)
          numberOfResult = data.data.count
          createList(data)
  })
  .catch(err => console.error(this.props.url, err.toString()))
  
}

class List extends React.Component {

  componentDidMount() {
    loadAllCharacters()
  }
    
    handleChange(searchText) {
      if(searchText.target.value.length === 0){
        loadAllCharacters()
      } else {
        var uRLWithName = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + searchText.target.value + "&apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
        console.log(uRLWithName)
        fetch(uRLWithName)
        .then(response => response.json())
            .then(data => {
                numberOfResult = data.data.count
                console.log(data)
                console.log()
                createList(data)
        })
        .catch(err => console.error(this.props.url, err.toString()))
      }
    }
    
    

    render() {
      return (
        
        <div className="parent">
        <div className="Search">
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />                    
        </div>
        <div id="List">
        

                        
        </div>
            
        </div>
      );
      
    }
  }
  
  
  export default List