import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  text-align: center;
  width: ${px2vw(50, 100)};
`;

export const Session = styled.div`
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: flex-start;
  margin-top: ${px2vw(10)};

  label {
    width: ${px2vw(260)};
    margin-right: ${px2vw(10)};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
