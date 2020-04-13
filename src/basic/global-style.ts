import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #fafafa;
    -webkit-font-smoothing: antialiased;
    height: 100%;
  }

  body {
    font-family: 'Arial, sans-serif';
    letter-spacing: normal;
    color: #212121;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  .chart-tooltip {
    position: absolute;
    text-align: center;
    display: inline-block;
    padding: 2px;
    font: 12px sans-serif;
    background: lightsteelblue;
    border: 0px;
    border-radius: 8px;
    pointer-events: none;
  }
`;

export default GlobalStyle;
