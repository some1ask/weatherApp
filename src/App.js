import React, { Component } from 'react';

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API = "3c9d23dedea36efe35978307481fb2ff";

class App extends Component {
  
  state = {
    temp: undefined,
    name: undefined,
    humidity: undefined,
    country:undefined,
    description:undefined,
    error:undefined
  }

  getWeather = async(event) =>{
    event.preventDefault();
    const city = event.target.elements.city.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`,{
      // headers : { 
      //   'Content-Type': 'application/json',
      //   'Accept': 'application/json'
      //  }

    })
    const result = await api.json();
    console.log(result);
    
    if(city){
      this.setState({
        temp:result.main.temp,
        name:result.name,
        humidity:result.main.humidity,
        country:result.sys.country,
        description:result.weather[0].description,
        error:""
      })
    }else{
        this.setState({
          temp: undefined,
          name: undefined,
          humidity: undefined,
          country:undefined,
          description:undefined,
          error:"Please enter city"
        })
      }
  }
  
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-md-7 title-container">
                  <Title/>
                </div>
                <div className="col-5 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather temp={this.state.temp} name={this.state.name} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
