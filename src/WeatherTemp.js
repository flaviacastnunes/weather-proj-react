import React, {useState} from "react";

export default function WeatherTemp(props){
    const [unit, setUnit]=useState("celsius");
    let celsius = Math.round((props.celsius)*9/5+32);

    function showFahrenheit (event) {
        event.preventDefault();
        setUnit("fahrenheit");

    }
    function showCelsius (event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return( 
        <div>
<span className="Tempnow">{props.celsius}</span>
{" "}  ºC | <a href="/" onClick={showFahrenheit}>ºF</a>
</div>
)}
else {
    return (
    <div>
        <span className="Tempnow">{celsius}</span>
    {" "}<a href="/" onClick={showCelsius}>ºC</a> |ºF
    </div>)
}
}