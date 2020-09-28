import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const LoadingIndicator = styled.div`
    width: 5rem;
    height: 5rem;
    border: 0.5rem solid ${props => props.theme.colors.primary.main};
    border-bottom-color: transparent;
    position: fixed;
    top: calc(50% - 2.5rem);
    left: calc(50% - 2.5rem);
    border-radius: 50%;
    animation: ${spin} infinite 1s linear;
`

const Loading = () => (
    <LoadingContainer>
        <LoadingIndicator />
    </LoadingContainer>
)

export default Loading
