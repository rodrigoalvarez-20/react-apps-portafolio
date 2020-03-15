import {API_KEY, BASE_URL_WEATHER, BASE_URL_FORECAST} from "./../constants/api_url";
export const getUrlByCity = (city) => {
    return `${BASE_URL_WEATHER}?q=${city}&appid=${API_KEY}`;
}
export const getURLForecast = (city) => {
    return `${BASE_URL_FORECAST}?q=${city}&appid=${API_KEY}`;
}