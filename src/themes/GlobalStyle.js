import { createGlobalStyle } from 'styled-components';
import { theme } from 'themes/colorTheme';

const GlobalStyle = createGlobalStyle`
  
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
  
  
  html {
    margin:0px;
    font-size: 62.5%; 
    font-family: 'Rubik', sans-serif;
    
  }
  
  body {
    margin: 0;
    margin-top: 8rem;
    padding: 0;
    font-weight: 400;
    font-size: 1.8rem;
    font-family: 'Rubik', sans-serif;
    color: ${theme.lightGrey};
    
   
  }
  `;

export default GlobalStyle;
