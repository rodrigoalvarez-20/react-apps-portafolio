import {CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "./../constants/weathers";
class WeatherService {
    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const city = weather_data.name;
        const temp_cels = (temp - 273.15).toFixed(0);

        const data = {
          humidity,
          temperature: Number(temp_cels),
          weatherState,
          wind: `${speed} m/s `
        }
    
        const update = {
          city: city,
          data: data
        }
    
        return update;
      }

      getWeatherState = weather_data => {
        const {id} = weather_data;
        if(id < 300) {
          return THUNDER;
        }else if (id < 400){
          return DRIZZLE;
        }else if (id < 600){
          return RAIN;
        }else if (id < 700){
          return SNOW;
        }else if (id === 800){
          return SUN;
        }else {
          return CLOUD;
        }
      }
    

}

export default WeatherService;