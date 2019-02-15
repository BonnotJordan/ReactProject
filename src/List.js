import React from 'react'



class List extends React.Component {
  
    handleChange(searchText) {
        console.log(searchText.target.value.length)
        var string = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=" + searchText.target.value + "&apikey=cc6ba08adc1a5d416f236d8712e9ed31&ts=1597532846&hash=794436f24dd054dead6d8c0950a0dff7";
        fetch(string)
        .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log()
        })
        .catch(err => console.error(this.props.url, err.toString()))
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