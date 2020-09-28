import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { firebaseAuthUser } from '../../types'

type AuthSliceState = {
    authStatus: boolean
    authUser: firebaseAuthUser | null
    authError: any
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: false,
        authUser: null,
        authError: null,
    } as AuthSliceState,
    reducers: {
        login: state => {
            state.authStatus = true
        },
        logout: state => {
            state.authStatus = false
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
