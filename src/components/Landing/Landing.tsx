import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LandingContainer = styled.div`
    margin: auto;
`

const LandingHeading = styled.h1`
    color: white;
`

const LandingLink = styled(Link)`
    display: block;
    min-width: 120px;
    background-color: white;
    padding: 0.8rem;
    margin: 1rem;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    transition: 0.3s;
    color: ${props => props.theme.colors.primary.main};
    &:hover {
        background-color: hsl(220, 80%, 80%);
        transition: 0.3s;
    }
`

const Landing = () => {
    return (
        <LandingContainer>
            <LandingHeading>
                Hi, Sign Up if you are new, Login if already have an account.
            </LandingHeading>
            <LandingLink to="/login">Log In</LandingLink>
            <LandingLink to="/register">Sign Up</LandingLink>
        </LandingContainer>
    )
}

export default Landing
