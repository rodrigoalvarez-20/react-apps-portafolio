import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import {getUrlByCity} from "../../services/Weather";
import styles from "../../../Styles/Styles.module.scss";
import {CircularProgress} from "@material-ui/core";
import WeatherService from "../../services/WeatherService";

class WeatherLocation extends Component<any, any> {
  constructor(props:any){
    super(props);
    const { city } = props;
    this.state = {
      city,
      data : null
    };

  }

  public componentWillMount(){
    this.handleClick();
  }

  handleClick = () => {
    //console.log("Getting data");
    fetch(getUrlByCity(this.state.city)).then( res => {
      return res.json();
    }).then(data => {
      const data_updated = new WeatherService().getData(data);
      this.setState({
        city: data_updated.city,
        data: data_updated.data
      });
    });
  }

  public render(){
    return (
      <div className={styles.WeatherLocation_Container} onClick={this.props.onWeatherLocationClick}>
        <Location city={this.state.city} />
        {
          this.state.data ? 
            <WeatherData data={this.state.data}></WeatherData> : 
            <CircularProgress size={50}/>
        }
      </div>
    );
  }

}

export default WeatherLocation;
