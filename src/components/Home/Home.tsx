import * as React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    margin: auto;
`

const HomeHeading = styled.h1``

const Home = () => {
    return (
        <HomeContainer>
            <HomeHeading>Welcome User</HomeHeading>
        </HomeContainer>
    )
}

export default Home
