import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Date from "./Date";

  
export default function App() {

  let [city, setCity]=useState("");
  let [temperature, setTemperature]=useState("");
  let [humidity, setHumidity]=useState("");
  let [wind, setWind]=useState("");
  let [description, setDescription]=useState("");
  let [icon, setIcon]=useState("http://openweathermap.org/img/wn/10d@2x.png");

  function updateCity(event){
    event.preventDefault();
    setCity(event.target.value);}

    function handleSubmit(event){
      event.preventDefault(); 
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a1140261bdb0b194c8ae933d2f478860&units=metric`
      axios.get(url).then(showData);
    }
  
  
  function showData(response) {
    console.log(response);
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setWind(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    setIcon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  }

  return (<div>
           <div className="AppWrapper">
            <div className="Header">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city..." onChange={updateCity}/>
        <input type="submit" value="Search" />
        <br />
      </form>

      <h1>{city}</h1>

      <div className="Description">{description}</div>

      <img
        src = {icon}
        className="Icon"
        alt="icon" />
    </div><div className="Date">
        <label>Last Update:</label>
       <Date />
      </div><div class="row">

        <div class="col-4">
          <span className="Tempnow">{temperature}</span>
          ºC
        </div>

        <div class="col-8">
          <ul>
            <li>
              Wind Speed: <span>{wind}</span>km/h
            </li>
            <li>
              Humidity: <span>{humidity}</span>%
            </li>
          </ul>
        </div>
      </div><div className="Forecastweather"></div></div>
      <div className="Link"><a href="https://github.com/flaviacastnunes/project-react" tittle="GithHub Repository">Open-source code,</a> by Flávia Nunes</div></div>
      )
    }