import React from 'react'
import ListMaterial from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from '@material-ui/core/ListItemText';
import './List.css';
import { Button } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class List extends React.Component {

  constructor(props) {
    super(props)
    this.allDatas = []
    this.state = {
      query: "",
      numberOfResultToDisplay: 20,
      isLoading: true
    }

    this.loadData = this.loadData.bind(this)
    this.createList = this.createList.bind(this)
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

  handleClick(event, id) {
    console.log("Clicked on ",event)
    window.location.assign('/details/' + id);
  }

  createList(data) {
    var allDatasTest = []
    for(var i=0;i<this.state.numberOfResultToDisplay;i++){
      const element = <ListItem  button onClick={this.handleClick.bind(this, data.data.results[i].name, data.data.results[i].id)} value={data.data.results[i].name} key={data.data.results[i].id}><ListItemText primary={data.data.results[i].name}></ListItemText></ListItem>;
      const element2 = <button type="button" onClick={this.handleClick.bind(this)} value={data.data.results[i].name}>Hello</button>
      allDatasTest.push(element)
      console.log("create a element")
    }
    console.log("finishPutData")
    return allDatasTest
  }

  componentDidMount() {
    this.loadData()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.allDatas = []
        this.allDatas = this.createList(data)
        this.setState({
          query: "",
          numberOfResultToDisplay: 20,
          isLoading: false
        })
    })
    .catch(err => console.error(this.props.url, err.toString()))
  }



  componentDidUpdate() {
      console.log("CDU")
  }
    
  handleChange(e) {
    this.state.query = e.target.value
    
    this.loadData()
    .then(response => response.json())
    .then(data => {
      this.state.numberOfResultToDisplay = data.data.count
      console.log(data)
      this.allDatas = []
      this.allDatas = this.createList(data)
      this.setState({
        query: this.state.query,
        numberOfResultToDisplay: data.data.count,
        isLoading: false
      });
      //console.log(allDatas)
      //React.render(allDatas)
    })
    .catch(err => console.error(this.props.url, err.toString()))
  }
    
  render() {
    console.log("render")
    console.log(this.allDatas)
    return ( 
      <div className="parent">
        <div className="Search">
          <input type="text" className="input" onChange={this.handleChange.bind(this)} placeholder="Search..." />                    
        </div>
        {this.state.isLoading ?
        <p>Loading...</p>
        :<div id="List">
        <ListMaterial>
          {this.allDatas}
        </ListMaterial>  
        </div>}
            
      </div>
    );  
    }
  }
  
  
  export default List