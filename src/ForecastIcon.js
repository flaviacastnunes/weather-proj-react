import React from "react";

export default function ForecastIcon(props){
    
    let icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    
    return(
        <img src={icon} alt="Weather Icon"></img>
    )
}