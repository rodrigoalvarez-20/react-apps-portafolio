import React from "react";
import WeatherData from "../WeatherLocation/WeatherData"

export interface IForecast {
    weekDay : string;
    hour : string;
    data : any;
}

class ForecastItem extends React.Component<any, any>{
    public render(){
        return (
            <div>
                <h3>{this.props.weekDay} - {this.props.hour}:00 hrs</h3>
                <WeatherData data={this.props.data}></WeatherData>
            </div>
        );
    }
}

export default ForecastItem;