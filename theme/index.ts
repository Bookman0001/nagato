import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: HiraKakuPro-W5;
    margin: 0;
    border: 0;
    padding: 0;
    div {
      .tl-edges {
        overflow-x : initial;
      }
    }
    h2 {
      font-family: initial;
    }
    a {
      text-decoration: none;
      color: initial;
      box-shadow : initial;
    }
  }
`
