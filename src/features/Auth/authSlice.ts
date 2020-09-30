import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { firebaseAuthUser } from '../../types'

export enum AuthStatus {
    loggedIn = 'loggedIn',
    pending = 'pending',
    loggedOut = 'loggedOut',
}

type AuthSliceState = {
    authStatus: AuthStatus
    authUser: firebaseAuthUser | null
    authError: any
    loginFormError: any
    signupFormError: any
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: AuthStatus.pending,
        authUser: null,
        authError: null,
        loginFormError: null,
        signupFormError: null,
    } as AuthSliceState,
    reducers: {
        login: state => {
            state.authStatus = AuthStatus.loggedIn
        },
        logout: state => {
            state.authStatus = AuthStatus.loggedOut
        },
        setAuthUser: (state, action) => {
            state.authUser = action.payload
        },
        setAuthError: (state, action) => {
            state.authError = action.payload
        },
        setLoginFormError: (state, action) => {
            state.loginFormError = action.payload
        },
        setSignupFormError: (state, action) => {
            state.signupFormError = action.payload
        },
    },
})

export const { login, logout, setAuthUser, setAuthError, setLoginFormError, setSignupFormError } = authSlice.actions

export const selectAuthStatus = (state: RootState) => state.auth.authStatus

export const selectAuthUser = (state: RootState) => state.auth.authUser

export const selectAuthError = (state: RootState): any => state.auth.authError

export const selectLoginFormError = (state: RootState): any => state.auth.loginFormError

export const selectSignupFormError = (state: RootState): any => state.auth.signupFormError

export default authSlice.reducer
