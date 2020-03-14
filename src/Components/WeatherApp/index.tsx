import React from "react";
import styles from "../Styles/Styles.module.scss";
import LocationList from "./components/LocationList";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import ForecastExtended from "./components/ForecastExtended";

const cities_arr = [
  "Mexico,mx", "Bogota,co", "Washington,us","Madrid,es"
];


class WeatherComponent extends React.Component<any, any>{
    constructor(props:any){
        super(props);
        this.state = {
          city_selected: null
        };
      }
    
      handleSelection = (city:string) => {
        this.setState({
          city_selected: city
        });
      }

    public render(){
        return (
            <div className={styles.WeatherComponent}>
                <Grid >
                    <Row>
                        <AppBar position="sticky">
                            <Toolbar>
                                <Typography>Weather App</Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LocationList cities={cities_arr} onSelectedLocation={this.handleSelection}></LocationList>
                        </Col>
                        <Col xs={12} md={6} >
                            <Paper elevation={8}>
                                <div className="Details">
                                {
                                    this.state.city_selected ? 
                                        <ForecastExtended city_selected={this.state.city_selected} /> :
                                        null
                                }
                                </div>
                            </Paper>
                        </Col>
                    </Row>        
                </Grid>
            </div>
        )
    }
}

export default WeatherComponent;