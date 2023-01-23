import React from "react";


export default function ForecastDay(props) {
   
    
    function day(){
        let date = new Date(props.forecast.dt *1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        let day = date.getDay();
        return days[day];
    }
    return (
        <div>
        <div>{day()}</div>
        <div></div>
        <div><span>{Math.round(props.forecast.temp.max)}º  </span><span>{Math.round(props.forecast.temp.min)}º</span></div>
        </div>
     )
}