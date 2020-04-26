import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const ButtonCont = styled.div`
  width: 100%;
  height: ${px2vw(5, 100)};
  margin-top: ${px2vw(15)};
  display: flex;
  flex-direction: row;
  algin-items: center;
  justify-content: flex-end;
`;

export const But = styled.button`
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  margin: 0 ${px2vw(25)};
  width: ${px2vw(150)};
  height: ${px2vw(40)};
  transition: 0.3s;
  outline: none;
  color: #222222;
  font-weight: bold;
  font-size: ${px2vw(15)};

  &:hover {
    width: ${px2vw(155)};
    height: ${px2vw(45)};
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const FakeBut = styled.div`
  margin: ${px2vw(5)} ${px2vw(25)};
  width: ${px2vw(150)};
  height: ${px2vw(40)};
`;

export const AppCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding: ${px2vw(15)};
  border-radius: ${px2vw(5)};
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
