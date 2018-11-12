import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Homepage from "./components/home/Homepage";

const Routes = props => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Homepage/>}/>
                </Switch>
            </Router>
    );
};

export default Routes;