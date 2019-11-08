import palx from 'palx'
import { createGlobalStyle, keyframes } from 'styled-components'

const palxColors = palx('#01C5FF')
const colors = {
  primary: '#01C5FF',
  ...palxColors,
}

const fonts = {
  primary: `Klima, 'Roboto', -apple-system, sans-serif`,
}
const fontSizes = {
  big: '3.5rem',
  medium: '2rem',
  mediumSmall: '1.8rem',
  small: '1.5rem',
  mediumBig: '2.3rem',
}
const mediaQueries = {
  sm: '@media (max-width: 32em)',
}

export const theme = {
  colors,
  fonts,
  fontSizes,
  mediaQueries,
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-weight: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }
  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    font-family: ${fonts.primary};

    background: linear-gradient(-55deg, ${colors.teal[5]}, \
       ${colors.blue[6]}, ${colors.pink[6]}, ${colors.red[4]}) no-repeat center center/cover;
    background-size: 100vw 125vh;
 /*   animation: gradientBG 30s ease infinite; */
  }
/*  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  } */
  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
