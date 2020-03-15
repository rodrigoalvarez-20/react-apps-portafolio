import React, {Component} from "react";
import ForecastExtended from "./../components/ForecastExtended";
import {connect} from "react-redux";
import { getForecastDataFromCities, getCity } from "./../reducers";

class ForecastExtendedContainer extends Component {
    render(){
        const {city, forecastData} = this.props;
        return (
            city && 
            <ForecastExtended city_selected={city} forecastData={forecastData} />
        );
    }
}

const mapStateToProps = (state) => ({ city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);