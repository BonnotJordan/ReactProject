import React from 'react'


function loadAllCharacters()  {
  var urlDefault = "http://gateway.marvel.com/v1/public/characters?apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
  fetch(urlDefault)
  .then(response => response.json())
      .then(data => {
          console.log(data)
          console.log()
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
                console.log(data)
                console.log()
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
        <div className="List">
                                
        </div>
            
        </div>
      );
      
    }
  }
  
  
  export default List