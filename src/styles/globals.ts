import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

button{
  cursor: pointer;
  /* font-family: 'Rubik', sans-serif; */
  border: none;
}

body{
  -webkit-font-smoothing: antialiased !important;

}

/* h1{
  font-family: 'Poppins', sans-serif;
  color: #4B3049;
}

p, li{
  font-family: 'Rubik', sans-serif;
  color: #795376;
} */

`;
