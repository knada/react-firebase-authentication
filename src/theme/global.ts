import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Inter', 'Segoe UI', 'Source Sans Pro', 'Lato', sans-serif;
        font-size: 16px;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }
`
