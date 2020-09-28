import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, selectAuthStatus } from './features/Auth/authSlice'
import { Routes } from './routes'
import { useFirebase } from './hooks/contexts'
import { login } from './features/Auth/authSlice'
import theme from './theme'

function App() {
    const firebase = useFirebase()
    const dispatch = useDispatch()

    React.useEffect(() => {
        const listener = firebase.auth.onAuthStateChanged((user: any) => {
            if (user) {
                const authUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    phoneNumber: user.phoneNumber,
                    photoURL: user.photoURL,
                    emailVerified: user.emailVerified,
                    isAnonymous: user.isAnonymous,
                    lastLoginAt: user.lastLoginAt,
                    createdAt: user.createdAt,
                }
                dispatch(setAuthUser(authUser))
            }
        })

        return () => listener()
    })

    React.useEffect(() => {
        // const authenticated = localStorage.getItem('authenticated')
        dispatch(login())
    })

    return (
        <Router>
            {console.log(useSelector(selectAuthStatus))}
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <div className="App">
                        <Routes />
                    </div>
                </>
            </ThemeProvider>
        </Router>
    )
}

export default App
