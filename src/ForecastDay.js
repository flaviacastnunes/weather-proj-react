import React from "react";
import Icon from "./Icon.js";
import "./ForecastDay.css";


export default function ForecastDay(props) {
   
    
    function day(){
        let date = new Date(props.forecast.dt *1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let day = date.getDay();
        return days[day];
    }
    return (
        <div>
        <div><strong>{day()}</strong></div>
        <div className="ForecastIcon"><Icon  icon={props.forecast.weather[0].icon} /></div>
        <div><span className="TempMax">{Math.round(props.forecast.temp.max)}º  </span><span>{Math.round(props.forecast.temp.min)}º</span></div>
        </div>
     )
}