import { getURLForecast } from "./../services/WeatherURL";
import getForecastData from "./../services/ForecastService";
import WeatherService from "./../services/WeatherService";
import {getUrlByCity} from "./../services/WeatherURL";

export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";

export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";

const setCity = payload => ({ type: SET_CITY , payload});

const setForecastData = payload => ({
    type: SET_FORECAST_DATA, payload
});

export const setSelectedCity = (payload) => {
    return (dispatch, getState) => {
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastData_Date;

        const now = new Date();

        if (date && (now - date) < 1 * 60 * 1000) {
            return;
        }

        return fetch(getURLForecast(payload)).then( res => {
            return res.json();
        }).then(data => {
            const forecastData = getForecastData(data);
            dispatch(setForecastData({city: payload, forecastData }));
        });
    };
};

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setWeather = payload => { 
    return dispatch => {
        payload.forEach(city => {
            dispatch(getWeatherCity(city));
            fetch(getUrlByCity(city)).then( res => {
                return res.json();
              }).then(data => {
                dispatch(setWeatherCity({city: city, weather: new WeatherService().getData(data)}));
            });
        });
    }
};