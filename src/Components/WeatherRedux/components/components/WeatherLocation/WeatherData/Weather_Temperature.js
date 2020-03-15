import React from "react";
import "./styles.css";
import WeatherIcons from "react-weathericons";
import {
  CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE
} from "./../../../constants/weathers";
import PropTypes from "prop-types";
const icons = {
    [CLOUD]: "cloud", [SUN]: "sun", [RAIN]: "rain", [SNOW]: "snow", [THUNDER]: "day-thunderstorm", [DRIZZLE]: "day-showers"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon){
        return <WeatherIcons className="wIcon" name={icon} size={sizeIcon} />
    }else {
        return <WeatherIcons className="wIcon" name={"day-sunny"} size={sizeIcon} />
    }


}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTemperature_Container">
        { getWeatherIcon(weatherState) }
        <span className="temperature"> {`${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>
    </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number,
  weatherState: PropTypes.string
}

export default  WeatherTemperature;
