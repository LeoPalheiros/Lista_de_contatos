import { createGlobalStyle, styled } from 'styled-components'
import variablesColors from './variables-colors'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    letter-spacing: 0.5px;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-color: ${variablesColors.black};
  color: ${variablesColors.white};
`

export default GlobalStyle
