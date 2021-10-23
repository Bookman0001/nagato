import { createGlobalStyle } from 'styled-components'
import { COLOR } from './constants'

export const GlobalStyle = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    body {
      background-color: ${COLOR.BLACK};
      color: ${COLOR.WHITE};
    }
  }
  body {
    font-family: "Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","モリサワ 新ゴ R","メイリオ",Meiryo,"Droid Sans",sans-serif;
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
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    h2 {
      font-family: initial;
      margin: 0;
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    h3 {
      font-family: initial;
      margin: 0;
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    p {
      margin: 0;
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    a {
      text-decoration: none;
      color: ${COLOR.BLUE};
      box-shadow : initial;
    }
    button {
      color: ${COLOR.BLACK};
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    select {
      color: ${COLOR.BLACK};
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    ul {
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
    li {
      @media (prefers-color-scheme: dark) {
        color: ${COLOR.WHITE};
      }
    }
  }
`
