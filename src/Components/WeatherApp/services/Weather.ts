import {API_KEY, BASE_URL_WEATHER, BASE_URL_FORECAST} from "../constants/api_url";
export const getUrlByCity = (city : string) => {
    return `${BASE_URL_WEATHER}?q=${city}&appid=${API_KEY}`;
}
export const getURLForecast = (city : string) => {
    return `${BASE_URL_FORECAST}?q=${city}&appid=${API_KEY}`;
}