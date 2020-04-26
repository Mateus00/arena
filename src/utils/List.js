import React from "react";
import { Container, Session } from "../estilos/ListStyle";

export default function List(props) {
  return (
    <Container>
      <Session>
        <table>
          <thead>
            <tr>
              <td>Nick</td>
              <td>Função</td>
            </tr>
          </thead>
          <tbody>
            {props.value.map((elm, key) => {
              return (
                <tr key={key}>
                  <td>{elm[0]}</td>
                  <td>{elm[1]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Session>
    </Container>
  );
}
