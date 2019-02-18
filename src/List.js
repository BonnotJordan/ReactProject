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
    const element = <ListItem button><ListItemText primary={data.data.results[i].name}></ListItemText></ListItem>;
    all.push(element)
  }
  return all
}

function loadAllCharacters()  {
  if(this.state.query) {
    var uRLWithName = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + this.state.query + "&apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
    return fetch(uRLWithName)
  } else {
    var urlDefault = "http://gateway.marvel.com/v1/public/characters?apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
    return fetch(urlDefault)
  }
  
}

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    
  }

  componentDidMount() {
    loadAllCharacters()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        numberOfResult = data.data.count
        var allDatas = createList(data)
        React.render(allDatas)
})
.catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidUpdate() {

  }
    
    handleChange(searchText) {
      setState({query: searchText.target.value});
      /*if(searchText.target.value.length === 0){
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
      }*/
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