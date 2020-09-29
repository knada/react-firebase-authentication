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
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: AuthStatus.loggedOut,
        authUser: null,
        authError: null,
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
    },
})

export const { login, logout, setAuthUser, setAuthError } = authSlice.actions

export const selectAuthStatus = (state: RootState) => state.auth.authStatus

export const selectAuthUser = (state: RootState) => state.auth.authUser

export const selectAuthError = (state: RootState): any => state.auth.authError

export default authSlice.reducer
