import React from 'react';
import { inject } from 'mobx-react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

const withAuthentication = Component => {

    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.props.sessionStore.setAuthUser(
                JSON.parse(localStorage.getItem('TILNoteAuthUser')),
            );
        }

        componentDidMount() {
            this.listener = this.props.firebase.onAuthUserListener(
                authUser => {
                    localStorage.setItem('TILNoteAuthUser', JSON.stringify(authUser));
                    this.props.sessionStore.setAuthUser(authUser);
                },
                () => {
                    localStorage.removeItem('TILNoteAuthUser');
                    this.props.sessionStore.setAuthUser(null);
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <Component {...this.props} />
            );
        }
    }

    return compose(
        withFirebase,
        inject('sessionStore'),
    )(WithAuthentication);
};

export default withAuthentication;