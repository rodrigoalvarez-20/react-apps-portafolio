import React from "react";
import WeatherLocation from "./WeatherLocation";
import styles from  "../../Styles/Styles.module.scss";

export interface ILocationList {
    cities: any;
    onSelectedLocation: (city:string)=>void;
}

class LocationList extends React.Component<ILocationList, any> {

    public handleWeatherLocationListClick = (city:string) => {
        this.props.onSelectedLocation(city);
    }

    public strToComponents = (cities : any) : JSX.Element => (
        cities.map( (city:any) => <WeatherLocation key={city} city={city} onWeatherLocationClick={ ()=>{
            return (this.handleWeatherLocationListClick(city))
        }} />)
    );

    public render(){
        return (
            <div className={styles.LocationList}>
                {this.strToComponents(this.props.cities)} 
            </div>
        );
    }
}

export default LocationList;