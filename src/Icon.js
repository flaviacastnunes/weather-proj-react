import React from "react";

export default function Icon(props){
    
    let icon = `http://openweathermap.org/img/wn/${props.icon}@2x.png`;
    
    return(
        <img src={icon} alt="Weather Icon"></img>
    )
}