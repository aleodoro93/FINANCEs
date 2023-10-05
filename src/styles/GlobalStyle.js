import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
    padding:0;
    margin:0;
    list-style:none;
    border:0;  
    box-sizing: border-box;
  }

body{
  width: 100%;
  min-height: 100vh;
  
}

li{
  list-style-type: none;
}

a, button{
  cursor: pointer;
}

`