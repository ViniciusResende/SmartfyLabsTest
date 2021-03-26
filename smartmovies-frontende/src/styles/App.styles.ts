import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
  }

  @media(max-width: 720){
    html {
      font-size: 87.5%;
    }
  }
  
  html{
    height: 100%
  }

  body {
    margin: 0;
    padding: 0;
    background: #000;
  }

  *{
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: --apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #33A1F2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2C8ED6;
  }

`;