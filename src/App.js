import React, {useState} from "react";
import Forecast from "./Forecast.js";
import axios from "axios";
import './App.css';
import WeatherInfo from "./WeatherInfo.js";
  
export default function App(props) {

  const[weatherData, setWeatherData]= useState({ready: false});
  const [city, setCity]= useState(props.defaultCity);
  
     
  function handleResponse(response) {
   
    
    setWeatherData ({
      ready:true,
      coordinates: response.data.coord,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
     description: response.data.weather[0].description,
     icon: response.data.weather[0].icon,
     date: new Date(response.data.dt *1000)    
     
  })}

function handleSubmit(event){
  event.preventDefault();
  search();
}

function search(){
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1140261bdb0b194c8ae933d2f478860&units=metric`
  axios.get(url).then(handleResponse);
  
}

function updateCity(event){
    setCity(event.target.value);
}

if(weatherData.ready) {
  return (
     <div className="container">
           <div className="AppWrapper">
            <div className="Header">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city..." autoFocus="on" onChange={updateCity}/>
        <input type="submit" value="Search"/>
        <br />
        
      </form>
      <WeatherInfo data={weatherData}/>
      <Forecast coordinates={weatherData.coordinates}/>

        </div>    
      </div>
      <div className="Link"><a href="https://github.com/flaviacastnunes/project-react" target="_blank" rel="noreferrer" title="GithHub Repository">Open-source code,</a> by Flávia Nunes</div></div>
      )
    } else {
      search();
      return "Loading..."
    }}