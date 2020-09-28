import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useFirebase } from '../../hooks/contexts'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    login,
    setAuthError,
    selectAuthError,
} from '../../features/Auth/authSlice'

import {
    AuthForm,
    AuthHeading,
    AuthLabel,
    AuthInput,
    AuthButton,
    AuthFooter,
    AuthLink,
    AuthError,
} from '../AuthContainer/AuthContainer'

const Login: React.FC = () => {
    const { register, handleSubmit } = useForm()
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const history = useHistory()
    const authError = useSelector(selectAuthError)

    const onSubmit = handleSubmit(({ email, password }) => {
        firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch(login())
                localStorage.setItem('authenticated', 'true')
                history.push('/home')
            })
            .catch((error: any) => {
                dispatch(
                    setAuthError({ code: error.code, message: error.message })
                )
            })
    })

    return (
        <AuthForm onSubmit={onSubmit}>
            <AuthHeading>Login to your account</AuthHeading>
            <AuthLabel htmlFor="email">
                Email
                <AuthInput
                    ref={register({ required: true })}
                    type="email"
                    name="email"
                />
            </AuthLabel>
            <AuthLabel htmlFor="password">
                Password
                <AuthInput
                    ref={register({ required: true })}
                    type="password"
                    name="password"
                />
            </AuthLabel>
            {authError ? <AuthError>{authError.message}</AuthError> : null}
            <AuthButton>Login</AuthButton>
            <AuthFooter>
                <AuthLink to="/register">Sign Up for a new user</AuthLink>
            </AuthFooter>
        </AuthForm>
    )
}

export default Login
