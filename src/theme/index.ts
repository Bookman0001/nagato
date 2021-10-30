import { createGlobalStyle } from 'styled-components'
import { COLOR } from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, sans-serif;
    color: ${COLOR.BLACK};
    margin: 0;
    border: 0;
    padding: 0;

    div {
      .tl-edges {
        overflow-x : initial;
      }
    }
    h1 {
      font-family: initial;
      margin: 0;
    }
    h2 {
      font-family: initial;
      margin: 0;
    }
    h3 {
      font-family: initial;
      margin: 0;
    }
    p {
      margin: 0;
    }
    a {
      text-decoration: none;
      color: ${COLOR.BLUE};
      box-shadow : initial;
    }
    button {
      color: ${COLOR.BLACK};
    }
    select {
      color: ${COLOR.BLACK};
    }
  }
`
