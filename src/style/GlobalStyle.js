import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-size: inherit;
    font-family: sans-serif;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    
    background-color: #fff;
  }
  a {
    text-decoration : none;
    
    color : inherit;
  }
  button {
    border : none;
    cursor : pointer;
  }
  li{
    list-style: none;
  }
`
