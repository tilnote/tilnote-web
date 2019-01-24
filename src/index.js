import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import 'semantic-ui-css/semantic.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Firebase, { FirebaseContext } from './contexts/Firebase';
import store from './stores';

ReactDOM.render(
    <Provider {...store}>
        <FirebaseContext.Provider value={new Firebase()}>
            <App />
        </FirebaseContext.Provider>
    </Provider>,
    document.getElementById('root'),
);

serviceWorker.unregister();
