import React from "react";
import styles from "../../Styles/Styles.module.scss";
import ForecastItem from "./ForecastItem";
import {CircularProgress} from "@material-ui/core";
import { getURLForecast } from "../services/Weather";
import getForecastData from "../services/ForecastService";

class ForecastExtended extends React.Component<any,any> {
    constructor(props: any){
        super(props);
        this.state = {
            forecastData: null
        };
    }

    componentDidMount(){
        this.updateCity(this.props.city_selected);
    }

    componentWillReceiveProps(nextProps:any){
        this.updateCity(nextProps.city_selected);
    }

    updateCity = (city:any) => {
        fetch(getURLForecast(city)).then( res => {
            return res.json();
          }).then(data => {
            this.setState ({
                forecastData: getForecastData(data)
            })
        });
    }

    showForecastWeekDays(forecastData:any){
        return forecastData.map( (forecast:any) => ( <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data.data}/> ));
    }

    render () {
        const {city_selected} = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h3 className={styles.Forecast_Title}>Pronostico Extendido de la ciudad {city_selected}</h3>
                { 
                    forecastData ? this.showForecastWeekDays(forecastData) :
                    <CircularProgress size={35}  />
                }
            </div>
        );
    }
}

export default ForecastExtended;