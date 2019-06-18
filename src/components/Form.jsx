import React from 'react'

const Form = (props) => (

    <form onSubmit={props.getWeather}>
    <input type="text" name="city"></input>
    <br></br>
    <button>Go</button>
</form>
)
export default Form;