import React from "react";
import Icon from "./Icon.js";
import FormattedDate from "./FormattedDate.js";
import WeatherTemp from "./WeatherTemp.js";


export default function WeatherInfo(props) {
    return(

        <div>

      <h1>{props.data.city}</h1>

      <div className="Description">{props.data.description}</div>

      <Icon icon={props.data.icon}/>

       <FormattedDate date={props.data.date} />
       
        <div className="row">
        <div className="col-4">
          <WeatherTemp celsius={props.data.temperature}/>
         </div>

        <div className="col-8">
          <ul>
            <li>
              Wind Speed: <span>{props.data.wind}</span>km/h
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
          </ul>
        </div>
        </div>
        </div>
    )
}