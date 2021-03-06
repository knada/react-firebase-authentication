import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

class Firebase {
    auth: any
    db: any

    constructor() {
        app.initializeApp(config)

        this.auth = app.auth()
        this.db = app.firestore()
    }

    doSignInWithEmailAndPassword = (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password)

    doCreateUserWithEmailAndPassword = (email: string, password: string) =>
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignOut = () => this.auth.signOut()

    doPasswordReset = (email: string) => this.auth.sendPasswordResetEmail(email)

    doPasswordUpdtate = (password: string) => this.auth.currentUser.updatePassword(password)
}

export default Firebase
