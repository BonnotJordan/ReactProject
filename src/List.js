import React from 'react'
import ReactDOM from 'react-dom'
import ListItem from "@material-ui/core/ListItem"
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import './List.css';

var NUMBER_OF_RESULTS_TO_DISPLAY = 20;

function createList(data) {
  var all = [];
  for(var i=0;i<NUMBER_OF_RESULTS_TO_DISPLAY;i++){
    const element = <ListItem button><ListItemText primary={data.data.results[i].name}></ListItemText></ListItem>;
    all.push(element)
  }
  return all
}

 

class List extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      query: ""
    }
  }

  loadData()  {
    if(this.state.query) {
      console.log("withQuery")
      var uRLWithName = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + this.state.query + "&apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
      return fetch(uRLWithName)
    } else {
      console.log("withoutQuery")
      var urlDefault = "http://gateway.marvel.com/v1/public/characters?apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
      return fetch(urlDefault)
    }
    
  }

  componentDidMount() {
    this.loadData()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var allDatas = createList(data)
        //React.render()
})
.catch(err => console.error(this.props.url, err.toString()))
}



  componentDidUpdate() {

  }
    
    handleChange(e) {
      console.log(e.target.value)
      this.setState({query: e.target.value})
      console.log(this.state.query)
      this.loadData()
      .then(response => response.json())
      .then(data => {
        console.log(data)
        var allDatas = createList(data)
        //React.render(allDatas)
      })
      .catch(err => console.error(this.props.url, err.toString()))
    }
    
    

    render() {
      return (
        
        <div className="parent">
        <div className="Search">
            <input type="text" value={this.state.query} className="input" onChange={this.handleChange.bind(this)} placeholder="Search..." />                    
        </div>
        <div id="List">
        

                        
        </div>
            
        </div>
      );
      
    }
  }
  
  
  export default List