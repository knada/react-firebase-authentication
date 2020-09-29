import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './theme/global'
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthUser, AuthStatus, selectAuthStatus } from './features/Auth/authSlice'
import { Routes } from './routes'
import { useFirebase } from './hooks/contexts'
import { login, logout } from './features/Auth/authSlice'
import theme from './theme'
import Loading from './components/Loading/Loading'

function App() {
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const authStatus = useSelector(selectAuthStatus)

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
        const authenticated = localStorage.getItem('authenticated')
        if (authenticated === 'true') {
            dispatch(login())
        } else {
            dispatch(logout())
        }
    })

    return (
        <Router>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <div className="App">{authStatus === AuthStatus.pending ? <Loading /> : <Routes />}</div>
                </>
            </ThemeProvider>
        </Router>
    )
}

export default App
