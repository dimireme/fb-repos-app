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

  a {
    color: #1e88e5;

    :hover {
      opacity: 0.8;
    }
  }
`;

export default GlobalStyle;
