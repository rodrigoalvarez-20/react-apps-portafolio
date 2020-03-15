import React from "react";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import {CircularProgress} from "@material-ui/core";

const showForecastWeekDays = forecastData => {
    return forecastData.map( forecast => ( <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data.data}/> ));
}

const ForecastExtended = ({city_selected, forecastData}) => (
    <div>
        <h3 className="forecast_title">Pronostico Extendido de la ciudad {city_selected}</h3>
        { forecastData ? showForecastWeekDays(forecastData) :
        <CircularProgress size={35}  />
        }
    </div>
);

export default ForecastExtended;