import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
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

const LogoutButton = styled.button``

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
                <HomeHeading>Welcome {authUser.email}</HomeHeading>
                <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
            </HomeContainer>
        )
    }
    return <Loading animation="spin" />
}

export default Home
