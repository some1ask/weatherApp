import React from 'react'
import {Animated} from "react-animated-css";

const Weather = (props) =>(
    <Animated animationIn="bounce" isVisible={true} animationInDuration={3000}>
    <div className="weather__info">
        {props.temp && <p className="weather__key">Temperature: <span>{props.temp}</span></p>}
        {props.name && <p className="weather__key">City: <span>{props.name}</span></p>}
        {props.humidity && <p className="weather__key">Humidity: <span>{props.humidity}</span></p>}
        {props.description && <p className="weather__key">Description: <span>{props.description}</span></p>}
        {props.error && <p className="weather__key"><span>{props.error}</span></p>} 
    </div>
    </Animated>
)
export default Weather;