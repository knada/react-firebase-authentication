import * as React from 'react'
import styled, { css, keyframes, Keyframes } from 'styled-components'
import ReactFirebase from '../SvgComponents/ReactFirebase'

type LoadingProps = {
    animation?: 'spin' | 'pulsate'
}

type animationType = {
    name: Keyframes
    duration: string
    timingFunction?: string
    iterationCount?: string
}

const LoadingContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: white;
    display: flex;
`

const IndicatorContainer = styled.div`
    width: 150px;
    height: 168.75px;
    margin: auto;
`

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const pulsate = keyframes`
    0% {
        transform: scale(1)
    }
    50% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
`

const animations = {
    spin: {
        name: spin,
        duration: '3s',
    },
    pulsate: {
        name: pulsate,
        duration: '0.75s',
    },
}

const loadingAnimation = ({
    name,
    duration,
    timingFunction = 'linear',
    iterationCount = 'infinite',
}: animationType) => css`
    animation: ${name} ${duration} ${timingFunction} ${iterationCount};
`

// const CircularLoadingIndicator = styled.div`
//     width: 5rem;
//     height: 5rem;
//     border: 0.5rem solid ${props => props.theme.colors.primary.main};
//     border-bottom-color: transparent;
//     position: fixed;
//     top: calc(50% - 2.5rem);
//     left: calc(50% - 2.5rem);
//     border-radius: 50%;
//     animation: ${spin} infinite 1s linear;
// `

const Loading = ({ animation }: LoadingProps) => {
    return (
        <LoadingContainer>
            <IndicatorContainer>
                {animation ? <ReactFirebase animation={loadingAnimation(animations[animation])} /> : <ReactFirebase />}
            </IndicatorContainer>
        </LoadingContainer>
    )
}

export default Loading
