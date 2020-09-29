import * as React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectAuthUser } from '../../features/Auth/authSlice'
import Loading from '../Loading/Loading'

const HomeContainer = styled.div`
    margin: auto;
`

const HomeHeading = styled.h1``

const Home = () => {
    const authUser = useSelector(selectAuthUser)
    if (authUser) {
        return (
            <HomeContainer>
                <HomeHeading>Welcome User</HomeHeading>
            </HomeContainer>
        )
    }
    return <Loading />
}

export default Home
