import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    background-color: hsl(220, 80%, 10%);
    width: 100%;
    min-height: 100vh;
    display: flex;
`

export const AuthForm = styled.form`
    background-color: white;
    width: 360px;
    margin: auto;
    padding: 1rem;
    border-radius: 0.5rem;
`

export const AuthBrand = styled.div`
    padding: 0.4rem;
    height: 120px;
    background: hsl(210, 100%, 35%);
`

export const AuthHeading = styled.h1`
    font-family: 'Inter', sans-serif;
    font-size: 1.25rem;
    font-weight: 500;
    margin: 1rem;
    text-align: center;
`

export const AuthLabel = styled.label`
    display: block;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
`

export const AuthInput = styled.input`
    padding-left: 1rem;
    margin-top: 10px;
    margin-bottom: 10px;
    display: block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: hsl(0, 0%, 5%);
    background-color: hsl(0, 0%, 95%);
    border: 1px solid rgba(146, 146, 156, 0.3);
    width: 100%;
    height: 38px;
    border-radius: 0.3rem;
    &:focus {
        border: 2px solid ${props => props.theme.colors.primary.main};
        border-radius: 0.3rem;
    }
`

export const AuthButton = styled.button`
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 0.825rem;
    font-weight: 600;
    color: white;
    display: block;
    margin: 1rem 0;
    width: 100%;
    height: 38px;
    border: none;
    border-radius: 0.3rem;
    background-color: ${props => props.theme.colors.primary.main};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: hsl(220, 80%, 30%);
        transition: 0.3s;
    }
`

export const AuthFooter = styled.footer`
    text-align: center;
`

export const AuthLink = styled(Link)`
    display: block;
    text-decoration: none;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: rgb(0, 98, 255);
    color: hsl(220, 80%, 40%);
`

export const AuthError = styled.p`
    color: hsl(10, 90%, 55%);
    font-size: 14px;
    font-family: sans-serif;
`

const AuthContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>
}

export default AuthContainer
