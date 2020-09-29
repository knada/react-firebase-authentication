import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useFirebase } from '../../hooks/contexts'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login, setAuthError } from '../../features/Auth/authSlice'
import ReactFirebase from '../SvgComponents/ReactFirebase'

import {
    AuthForm,
    AuthBrand,
    AuthHeading,
    AuthLabel,
    AuthInput,
    AuthButton,
    AuthFooter,
    AuthLink,
} from '../AuthContainer/AuthContainer'

const SignUp: React.FC = () => {
    const { register, handleSubmit } = useForm()
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = handleSubmit(({ email, password, confirmPassword }) => {
        if (password === confirmPassword) {
            firebase
                .doCreateUserWithEmailAndPassword(email, password)
                .then(() => {
                    dispatch(login())
                    history.push('/home')
                })
                .catch((error: any) => {
                    dispatch(setAuthError(error))
                })
        } else {
            dispatch(
                setAuthError({
                    message: 'password did not match confirm password!',
                })
            )
        }
    })

    return (
        <AuthForm onSubmit={onSubmit}>
            <AuthBrand>
                <ReactFirebase />
            </AuthBrand>
            <AuthHeading>Sign Up for an Account</AuthHeading>
            <AuthLabel htmlFor="email">
                Email
                <AuthInput ref={register({ required: true })} type="email" name="email" />
            </AuthLabel>
            <AuthLabel htmlFor="password">
                Password
                <AuthInput ref={register({ required: true })} type="password" name="password" />
            </AuthLabel>
            <AuthLabel htmlFor="confirmPassword">
                Confirm Password
                <AuthInput ref={register({ required: true })} type="password" name="confirmPassword" />
            </AuthLabel>
            <AuthButton>Login</AuthButton>
            <AuthFooter>
                <AuthLink to="/login">Already have an account? Log in</AuthLink>
            </AuthFooter>
        </AuthForm>
    )
}

export default SignUp
