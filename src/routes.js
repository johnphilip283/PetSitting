import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import theme from './styles/materialTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Homepage from "./components/home/Homepage";
import Dashboard from "./components/dashboard/Dashboard";

const Routes = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Homepage/>}/>
                    <Route exact path="/dashboard" render={() => <Dashboard/>}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

export default Routes;