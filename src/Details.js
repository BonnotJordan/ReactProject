import React from 'react'
import './Details.css'


class Details extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
          name: "",
          description: "",
          isLoading: true
    }
  }

  loadData()  { 
      var uRL = "http://gateway.marvel.com/v1/public/characters/" + this.props.match.params.id + "?apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
      return fetch(uRL)
  }

  componentDidMount() {
    this.loadData()
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.setState({
          name: data.data.results[0].name,
          description: data.data.results[0].description,
          image: data.data.results[0].thumbnail.path + "/portrait_incredible.jpg",
          isLoading: false
        })
    })
    .catch(err => console.error(this.props.url, err.toString()))
  }

  render() {
    return ( 
      <div className="parent">
            <h1>
                {this.state.name}
            </h1>
            <h4>
              {this.state.description}
            </h4>
            <img src={this.state.image} alt = "Character"></img>
      </div>
    );  
    }
  }
  
  
  export default Details