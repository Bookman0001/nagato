import { createGlobalStyle } from 'styled-components'
import { COLOR } from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, sans-serif;
    color: ${COLOR.WHITE};
    background-color: ${COLOR.BLACK};
    margin: 0;
    border: 0;
    padding: 0;

    div {
      .tl-edges {
        overflow-x: initial;
      }
    }
    h1 {
      font-family: initial;
      margin: 0;
      padding: 0;
    }
    h2 {
      font-family: initial;
      margin: 0;
      padding: 0;
    }
    h3 {
      font-family: initial;
      margin: 0;
      padding: 0;
    }
    h4 {
      font-family: initial;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
    }
    a {
      color: ${COLOR.BLUE};
      box-shadow: initial;
      cursor: pointer;
    }
    button {
      color: ${COLOR.WHITE};
      cursor: pointer;
    }
    select {
      color: ${COLOR.WHITE};
    }
    input {
      padding: 0;
      color: ${COLOR.WHITE};
    }
  }
`
