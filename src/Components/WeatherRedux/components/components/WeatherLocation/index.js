import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import {CircularProgress} from "@material-ui/core";

const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
  <div className="weatherLocation_Container" onClick={onWeatherLocationClick}>
    <Location city={city} />
      {data ? 
        <WeatherData data={data}></WeatherData> : 
        <CircularProgress size={50}/>
      }
          
  </div>
);

export default WeatherLocation;
