import * as React from 'react'
import { useForm } from 'react-hook-form'
import { useFirebase } from '../../hooks/contexts'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuthError } from '../../features/Auth/authSlice'
import {
    AuthForm,
    AuthBrand,
    AuthHeading,
    AuthLabel,
    AuthInput,
    AuthButton,
    AuthLink,
} from '../AuthContainer/AuthContainer'
import ReactFirebase from '../SvgComponents/ReactFirebase'

const ResetPassword = () => {
    const { register, handleSubmit } = useForm()
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = handleSubmit(({ email }) => {
        firebase
            .doPasswordReset(email)
            .then(() => {
                history.push('/')
            })
            .catch((error: any) => {
                dispatch(setAuthError({ code: error.code, message: error.message }))
            })
    })

    return (
        <AuthForm onSubmit={onSubmit}>
            <AuthBrand>
                <ReactFirebase />
            </AuthBrand>
            <AuthHeading>Reset your password</AuthHeading>
            <AuthLabel htmlFor="email">
                Email Address
                <AuthInput ref={register({ required: true })} type="email" name="email" />
            </AuthLabel>
            <AuthButton>Reset My Password</AuthButton>
            <AuthLink to="/">Home</AuthLink>
        </AuthForm>
    )
}

export default ResetPassword
