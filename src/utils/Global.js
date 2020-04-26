import { createGlobalStyle } from "styled-components";
import px2vw from "./px2vw";

export const Global = createGlobalStyle`
  * {
    color: #222222;
    padding: 0;
    box-sizing: border-box;
    font-size: ${px2vw(28)};
    h1 {font-size: ${px2vw(35)};}
    h4 {margin: 0;}

    @media (min-width: 768px) {
      font-size: ${px2vw(24)};
      h1 {font-size: ${px2vw(30)};}
      h4 {margin: 0;}
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(18)};
      h1 { font-size: ${px2vw(25)};}
      h4 {margin: 0;}
    }
  }

  body {
    margin: ${px2vw(3, 100)} ${px2vw(3, 100)} 0 ${px2vw(3, 100)};
    overflow-x: hidden;
  }

  input[type=text] {
    width: ${px2vw(250)};
  }

  div {
    align-items: center;
  }

`;

export default Global;
