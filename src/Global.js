import { createGlobalStyle } from "styled-components";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
</style>

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    background-color: black;
  }
`;
export default GlobalStyle;