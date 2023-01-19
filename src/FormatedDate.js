import React from "react";
import "./FormatedDate.css";

export default function FormatedDate(props) {
    let days = ["Sunday", "Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    

    if (minutes<10) {
        minutes = `0${minutes}`
    }
    if (hours<10) {
        hours = `0${hours}`
    }
        return (<h2>{day}, {hours}:{minutes}</h2>)
    }