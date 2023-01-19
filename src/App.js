import React, {useState} from "react";
import './App.css';
import axios from "axios";
import FormatedDate from "./FormatedDate";

  
export default function App(props) {

  const [city, setCity]=useState(props.defaultCity);
  const[weatherData, setWeatherData]=useState({ready: true});
     
  function handleResponse(response) {
    setWeatherData ({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
     description: response.data.weather[0].description,
     icon: (`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`),
     date: new Date(response.data.dt *1000),
     ready:true,
  })}


function handleSubmit(event){
  event.preventDeafault();
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
  <div>
           <div className="AppWrapper">
            <div className="Header">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city..." onChange={updateCity}/>
        <input type="submit" value="Search" />
        <br />
      </form>

      <h1>{city}</h1>

      <div className="Description">{weatherData.description}</div>

      <img
        src = {weatherData.icon}
        className="Icon"
        alt="icon" />

    </div>
            <label>Last Update:</label>
       <FormatedDate date={weatherData.date}/>
     

      <div class="row">

        <div class="col-4">
          <span className="Tempnow">{weatherData.temperature}</span>
          ºC
        </div>

        <div class="col-8">
          <ul>
            <li>
              Wind Speed: <span>{weatherData.wind}</span>km/h
            </li>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
          </ul>
        </div></div>
    
      <div className="Link"><a href="https://github.com/flaviacastnunes/project-react" target="_blank" rel="noreferrer" title="GithHub Repository">Open-source code,</a> by Flávia Nunes</div>
      </div></div>
      )
    } else {
      search();
      return "Loading..."
    }}