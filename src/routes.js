import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import theme from './styles/materialTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Homepage from "./components/home/Homepage";
import Dashboard from "./components/dashboard/Dashboard";
import Listings from "./components/listings/Listings";
import CreateListing from "./components/listings/CreateListing";
import Sitters from "./components/sitters/Sitters";
import SitterRatings from "./components/sitters/SitterRatings";

const Routes = props => {
    return (
        <MuiThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Homepage/>}/>
                    <Route exact path="/dashboard" render={() => <Dashboard/>}/>
                    <Route exact path="/listings" render={() => <Listings/>}/>
                    <Route exact path="/listings/create" render={() => <CreateListing/>}/>
                    <Route exact path="/sitters" render={() => <Sitters/>}/>
                    <Route path="/sitters/:id" component={SitterRatings} />
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

export default Routes;