import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${px2vw(20, 100)} ${px2vw(20, 100)};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(250, 250, 250, 0.5);
`;

export const Content = styled.div`
  background-color: white;
  width: ${px2vw(20, 100)};
  height: ${px2vw(20, 100)};
  border: 1px #333333 solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  button {
    margin: ${px2vw(20)} ${px2vw(20)};
  }

  input {
    width: ${px2vw(250)};
  }
`;
