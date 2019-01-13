import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import AuthPage from '../Auth';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Header />
            {/* TODO: delete below Navigation */}
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.AUTH} component={AuthPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
        </div>
    </Router>
);

export default App;
