import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    color: #ffdbbf;
  }
  
  body, html, #root {
    min-height: 100vh;
    min-width: 100vw;
  }

  button {
    border: 0;
    outline: 0;
    background: 0;
  }
`