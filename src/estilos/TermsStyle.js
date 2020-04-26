import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  text-align: center;
  width: ${px2vw(50, 100)};
  margin-bottom: 50px;
`;

export const Content = styled.div`
  text-align: left;
  background-color: rgba(225, 225, 225, 0.4);
  padding: ${px2vw(20)};
  border-radius: ${px2vw(5)};
`;

export const Session = styled.div`
  text-align: left;
`;
