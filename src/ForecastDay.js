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
        <div>{props.forecast.weather[0].icon}</div>
        <div><span>{Math.round(props.forecast.tem.max)}</span><span>{Math.round(props.forecast.tem.min)}</span></div>
        </div>
     )
}