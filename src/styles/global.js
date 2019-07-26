import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
    background-color: var(--DarkestWhite);
    color: var(--Ink);
    font-family: sans-serif;
    font-size: 20px;
    line-height: 26px;
    /* letter-spacing: 20px; */

    .bodySmall {
      font-size: 18px;
      line-height: 24px;
    }

    .bodySmallLest {
      font-size: 16px;
      line-height: 22px;
    }

    .IconMedium {
      width: 25px;
      height: 25px;
    }
  }

  h1 {
    font-size: 42px;
    font-weight: 500;
    line-height: 50px;
  }

  h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 40px;
  }

  h3 {
    font-size: 30px;
    font-weight: 500;
    line-height: 36px;
  }

  h4 {
    font-size: 26px;
    font-weight: 500;
    line-height: 32px;
  }

  h4 {
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
  }

`;

export default GlobalStyle;
