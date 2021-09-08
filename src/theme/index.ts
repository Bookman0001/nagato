import { createGlobalStyle } from 'styled-components'
import { COLOR } from './constants'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Hiragino Kaku Gothic ProN","ヒラギノ角ゴ ProN W3","モリサワ 新ゴ R","メイリオ",Meiryo,"Droid Sans",sans-serif;
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
    a {
      text-decoration: none;
      color: ${COLOR.BLUE};
      box-shadow : initial;
    }
  }
`
