import React from "react";
import WeatherExtraInfo from "./Weather_Extra_Info";
import WeatherTemperature from "./Weather_Temperature";
import styles from "../../../../Styles/Styles.module.scss";

export interface IWeatherData {
  data : { 
    temperature:string, 
    weatherState :string,
    humidity:string, 
    wind:string 
  };
}

class WeatherData extends React.Component<IWeatherData, any>{
  public render(){
    return (
      <div className={styles.WeatherData_Container}>
          <WeatherTemperature  temperature={this.props.data.temperature} weatherState={this.props.data.weatherState} />
          <WeatherExtraInfo humidity={this.props.data.humidity} wind={this.props.data.wind}/>
      </div>
    );
  }
}

export default WeatherData;
