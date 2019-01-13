import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_PROD_API_KEY,
    authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
    projectId: process.env.REACT_APP_PROD_PROJECT_ID,
    storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
};

class Firebase {

    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.googleProvider = new app.auth.GoogleAuthProvider();
    }

    doSignInWithGoogle = () => this.auth.doSignInWithGoogle(this.googleProvider);
    doSignOut = () => this.auth.signOut();
}

export default Firebase;