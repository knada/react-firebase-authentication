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

const ChangePassword = () => {
    const { register, handleSubmit } = useForm()
    const firebase = useFirebase()
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmit = handleSubmit(({ newPassword }) => {
        firebase
            .doPasswordUpdtate(newPassword)
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
            <AuthHeading>Change your password</AuthHeading>
            <AuthLabel htmlFor="email">
                Current Password
                <AuthInput ref={register({ required: true })} type="password" name="currentPassword" />
            </AuthLabel>
            <AuthLabel htmlFor="email">
                New Password
                <AuthInput ref={register({ required: true })} type="password" name="newPassword" />
            </AuthLabel>
            <AuthLabel htmlFor="email">
                Confirm New Password
                <AuthInput ref={register({ required: true })} type="password" name="confirmPassword" />
            </AuthLabel>
            <AuthButton>Change My Password</AuthButton>
            <AuthLink to="/">Home</AuthLink>
        </AuthForm>
    )
}

export default ChangePassword
