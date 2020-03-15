import React, {Component} from 'react';
import './App.css';
import LocationListContainer from "./components/containers/LocationListContainer";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import ForecastExtendedContainer from './components/containers/ForecastExtendedContainer';

const cities_arr = [
  "Mexico,mx",
  "Bogota,co",
  "Washington,us",
  "Buenos Aires,ar"
];

class WeatherRedux extends Component {

  render() {
    return (
      <div style={{ maxwidth: "80%", margin: "auto", marginTop: "3em" }}>
        <Grid >
          <Row>
            <AppBar position="sticky">
              <Toolbar><Typography>Weather App</Typography></Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities_arr}/>
            </Col>
            <Col xs={12} md={6} >
              <Paper elevation={8}>
                <div className="Details">
                  <ForecastExtendedContainer />
                </div>
              </Paper>
            </Col>
          </Row>        
        </Grid>
      </div>
    );
  }
}

export default WeatherRedux;

