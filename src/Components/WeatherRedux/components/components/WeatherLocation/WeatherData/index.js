import React from "react";
import WeatherExtraInfo from "./Weather_Extra_Info";
import WeatherTemperature from "./Weather_Temperature";
import "./styles.css";
import PropTypes from "prop-types";

const WeatherData = ({data : { temperature, weatherState, humidity, wind } }) => {
  return (
    <div className="weatherData_Container">
        <WeatherTemperature  temperature={temperature} weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
  );
};

WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
};

export default WeatherData;
