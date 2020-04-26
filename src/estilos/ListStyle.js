import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  background-color: #eeeeee;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 ${px2vw(10)} 0 0;
`;

export const Session = styled.div`
  padding: ${px2vw(5)};

  td {
    width: ${px2vw(250)};
    text-align: left;
  }
`;