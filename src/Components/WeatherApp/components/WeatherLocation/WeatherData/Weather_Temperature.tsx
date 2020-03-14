import React from "react";
import styles from "../../../../Styles/Styles.module.scss";
import WeatherIcons from "react-weathericons";
import {
  CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE
} from "../../../constants/weather";

const icons : {[key: string]: string} = {
    [CLOUD] : "cloud",
    [SUN]: "sun", 
    [RAIN]: "rain", 
    [SNOW]: "snow", 
    [THUNDER]: "day-thunderstorm", 
    [DRIZZLE]: "day-showers"
}

const getWeatherIcon = (weatherState:string) => {
    const icon : string = icons[weatherState];
    const sizeIcon = "4x";

    if (icon){
        return <WeatherIcons className={styles.WIcon} name={icon} size={sizeIcon} />
    }else {
        return <WeatherIcons className={styles.WIcon} name={"day-sunny"} size={sizeIcon} />
    }


}

class WeatherTemperature extends React.Component<any,any> {
    public render(){
        return(
            <div className={styles.WeatherTemperature_Container}>
                { getWeatherIcon(this.props.weatherState) }
                <span className={styles.Temperature}> {`${this.props.temperature}`}</span>
                <span className={styles.temperatureType}>{` Cº`}</span>
            </div>
        );
    }
}


export default  WeatherTemperature;
