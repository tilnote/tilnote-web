import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../Header';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import HomePage from '../Home';
import SignInPage from '../SignIn';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../../contexts/Session';

const App = () => (
    <Router>
        <div>
            <Header />
            {/* TODO: delete below Navigation */}
            <Navigation />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        </div>
    </Router>
);

export default withAuthentication(App);
