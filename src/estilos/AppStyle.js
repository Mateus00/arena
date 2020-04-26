import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  width: ${px2vw(97, 100)};
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  color: black;
  font-weight: 200;
`;

export const Flags = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(27, 100)};
`;

export const AppTittle = styled.div`
  width: inherit;
  height: 50%;
`;

export const AppLogo = styled.img`
  width: ${px2vw(10, 100)};
  height: ${px2vw(10, 100)};
`;
