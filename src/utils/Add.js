import React, { useState } from "react";
import { Container, Content } from "../estilos/Add";

export default function Add(props) {
  const [nick, setNick] = useState("");
  const [func, setFunc] = useState("");
  return (
    <Container>
      <Content>
        <label>Nick</label>
        <input value={nick} onChange={(e) => setNick(e.target.value)} />
        <label>Função</label>
        <select value={func} onChange={e => setFunc(e.target.value)}>
          <option value=""> </option>
          <option value="Jogador">Jogador</option>
        </select>
        <div>
          <button onClick={() => props.close(false)}>cancelar</button>
          <button onClick={() => props.adicionar([nick, func])}>Adicionar</button>
        </div>
      </Content>
    </Container>
  );
}
