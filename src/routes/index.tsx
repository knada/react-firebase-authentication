import * as React from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthStatus, selectAuthStatus } from '../features/Auth/authSlice'
import AuthContainer from '../components/AuthContainer/AuthContainer'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import Landing from '../components/Landing/Landing'
import Home from '../components/Home/Home'

const AuthRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    const authStatus = useSelector(selectAuthStatus) === AuthStatus.loggedIn

    return (
        <Route
            {...rest}
            render={({ location }) =>
                authStatus ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
            }
        />
    )
}

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <AuthContainer>
                    <Landing />
                </AuthContainer>
            </Route>
            <Route path="/login">
                <AuthContainer>
                    <Login />
                </AuthContainer>
            </Route>
            <Route path="/register">
                <AuthContainer>
                    <SignUp />
                </AuthContainer>
            </Route>
            <AuthRoute path="/home">
                <AuthContainer>
                    <Home />
                </AuthContainer>
            </AuthRoute>
        </Switch>
    )
}
