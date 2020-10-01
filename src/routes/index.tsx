import * as React from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthStatus, selectAuthStatus } from '../features/Auth/authSlice'
import AuthContainer from '../components/AuthContainer/AuthContainer'
import Login from '../components/Login/Login'
import SignUp from '../components/SignUp/SignUp'
import Landing from '../components/Landing/Landing'
import Home from '../components/Home/Home'
import ResetPassword from '../components/ResetPassword/ResetPassword'
import ChangePassword from '../components/ChangePassword/ChangePassword'

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
                <Landing />
            </Route>
            <Route exact path="/login">
                <AuthContainer>
                    <Login />
                </AuthContainer>
            </Route>
            <Route exact path="/register">
                <AuthContainer>
                    <SignUp />
                </AuthContainer>
            </Route>
            <AuthRoute exact path="/home">
                <Home />
            </AuthRoute>
            <Route exact path="/reset-password">
                <AuthContainer>
                    <ResetPassword />
                </AuthContainer>
            </Route>
            <AuthRoute exact path="/change-password">
                <AuthContainer>
                    <ChangePassword />
                </AuthContainer>
            </AuthRoute>
        </Switch>
    )
}
