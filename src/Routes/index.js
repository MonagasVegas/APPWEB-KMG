import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import Servicio from '../Components/Servicio';
import  Contacto  from '../Components/Contacto';
import Home from '../Components/Home';





import { THEME } from '../Constants';
const theme = THEME;

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <ThemeProvider theme={theme}>
                        <Route exact path="/">
                          <Servicio />
                        </Route>
                        <Route exact path="/contacto">
                          <Contacto />
                        </Route>
                        <Route exact path="/Home">
                            <Home />
                        </Route>

                        
                    </ThemeProvider>
                </Switch>
            </Router >
        );
    }
}
export default Routes;