import React, { Component } from 'react';
import { Route } from "react-router-dom";
import HomePage from './HomePage';

class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Route
                    path={'/'}
                    exact
                    render={() => <HomePage />}
                />
            </React.Fragment>
        );
    }
}

export default Routes;