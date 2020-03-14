import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Styles/Styles.module.scss";
import IApp from "./Interfaces";
import WeatherComponent from "./WeatherApp";

import 'bootstrap/dist/css/bootstrap.min.css';
  
function About() {
    return <h2>About</h2>;
}
  
function Users() {
    return <h2>Users</h2>;
}

let dictApp : Array<IApp> = [
    { name: "Weather App", url: "/WeatherApp", icon: "", component: <WeatherComponent /> },
    { name: "Weather App con Redux", url: "/WeatherRedux", icon:"", component: <About /> },
    { name: "Customers ABM", url: "/Customers", icon: "", component: <Users /> }
]

class App extends React.Component<any, any> {
    public render(){
        return (
            <Router>
                <div className={ styles.Container } >
                    <Container>
                        <Navbar expand="lg" variant="dark" bg="dark">
                            <Navbar.Brand href={dictApp[0].url} style={{ fontSize:"2.2em" }}>React apps Portafolio</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto" style={{ marginLeft:"24px" }}>
                                {
                                    dictApp.map(app => {
                                        return (
                                            <Nav.Link href={app.url}><Button variant="outline-success" size="lg">{app.name}</Button></Nav.Link>
                                        )
                                    })
                                }
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Container>
                </div>
                <Switch>
                {
                    dictApp.map(app=>{
                        return (
                            <Route path={app.url}>
                                {app.component}
                            </Route>
                        );
                    })
                }
                </Switch>
            </Router>
        )
    }
}

export default App;