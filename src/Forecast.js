import React, {useState} from "react";
import ForecastDay from "./ForecastDay.js";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {

    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

 
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    if (loaded) {
        return (
            <div className="Forecast">
            <div className="row">
                {forecast.map(function (daylyForecast, index) {
                    if (index<5){
                    return(
                         <div className="col" key={index}>
                            <ForecastDay forecast={daylyForecast} />
                            </div>
                    )}
                })}
               </div>
               </div>)
       
    } else {
   
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=63214c4281922e3bb72fdf12dada7734&units=metric`;
        axios.get(url).then(handleResponse);
        return null;
}}