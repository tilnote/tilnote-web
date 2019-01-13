import React from 'react';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';

const withAuthentication = Component => {

    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return <Component {...this.props} />;
        }
    }
}

return compose(withFirebase)(WithAuthentication);

export default withAuthentication;