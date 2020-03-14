import React from "react";
import styles from "../../../../Styles/Styles.module.scss";

interface IWeatherExtraInfo {
    humidity: string;
    wind: string;
}

class WeatherExtraInfo extends React.Component<IWeatherExtraInfo, any>{
    public render(){
        return (
            <div className={styles.WeatherExtraInfo_Container}>
                <span className="extraInfoText">{`Humedad: ${this.props.humidity}  %`}</span>
                <span className="extraInfoText">{`Viento: ${this.props.wind}`}</span>
            </div>
        );
    }
}

export default WeatherExtraInfo;
