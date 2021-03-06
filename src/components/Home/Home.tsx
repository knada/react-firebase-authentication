import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { selectAuthUser, logout, setAuthError } from '../../features/Auth/authSlice'
import { useFirebase } from '../../hooks/contexts'
import Loading from '../Loading/Loading'

const HomeContainer = styled.div`
    margin: auto;
`

const HomeHeading = styled.h1`
    margin: 2rem;
    text-align: center;
`

const sharedStyles = css`
    display: block;
    min-width: 120px;
    background-color: white;
    border: none;
    padding: 0.8rem;
    margin: 1rem auto;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: hsl(220, 80%, 80%);
        transition: 0.3s;
    }
`

const ChangePasswordLink = styled(Link)`
    ${sharedStyles}
    text-align: center;
    width: 200px;
`

const LogoutButton = styled.button`
    ${sharedStyles}
`

const Home = () => {
    const authUser = useSelector(selectAuthUser)
    const firebase = useFirebase()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        firebase
            .doSignOut()
            .then(() => {
                localStorage.removeItem('authenticated')
                dispatch(logout())
                history.push('/')
            })
            .catch((error: any) => dispatch(setAuthError({ code: error.code, message: error.message })))
    }

    if (authUser) {
        return (
            <HomeContainer>
                <ChangePasswordLink to="/change-password">Change Password</ChangePasswordLink>
                <HomeHeading>Welcome {authUser.email}</HomeHeading>
                <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
            </HomeContainer>
        )
    }
    return <Loading animation="pulsate" />
}

export default Home
