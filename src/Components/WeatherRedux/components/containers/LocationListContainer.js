import React, {Component} from "react";
import LocationList from "./../components/LocationList";
import { connect } from "react-redux";
import * as actions from "./../actions";
import { getWeatherCities, getCity } from "./../reducers";
import { bindActionCreators } from "redux";

class LocationListContainer extends Component {
    
    componentDidMount(){
        this.props.setWeather(this.props.cities);
        this.props.setSelectedCity(this.props.city);
    }

    handleSelection = city => {
        this.props.setSelectedCity(city);
    }

    render(){
        return (
            <LocationList cities={this.props.citiesWeather} onSelectedLocation={this.handleSelection}></LocationList>
        );
    }
}

const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);
  
const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);