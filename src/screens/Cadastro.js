import React, { useState } from "react";
import Card from "../utils/Card";
import List from "../utils/List";
import Add from "../utils/Add";
import InputMask from "react-input-mask";
import { getObject, Cadastrar } from "../utils/Data";
import { ButtonContainer, Button } from "../utils/Button";
import { Container, Session } from "../estilos/CadastrosStyle";

export default function Cadastro(props) {
  const [participantes, setParticipantes] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [nomeEquipe, setNomeEquipe] = useState("");
  const [nomeLider, setNomeLider] = useState("");
  const [numLider, setNumLider] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [emailLider, setEmailLider] = useState("");
  const [conhecimento, setConhecimento] = useState("");

  const adicionar = (value) => {
    let a = participantes;
    a.push(value);
    setParticipantes(a);
    setVisible(false);
  };

  const Concluir = () => {
    console.log(
      getObject(
        nomeEquipe,
        nomeLider,
        numLider,
        whatsapp,
        emailLider,
        participantes,
        conhecimento
      )
    );
    if (!loading) {
      setLoading(true);
      Cadastrar(
        getObject(
          nomeEquipe,
          nomeLider,
          numLider,
          whatsapp,
          emailLider,
          participantes,
          conhecimento
        ),
        () => setLoading(false)
      );
    }
  };

  return (
    <Container>
      <Card>
        <h1>Cadastrar Equipe</h1>
        <Session>
          <label>
            Nome da Equipe:
            <input
              value={nomeEquipe}
              onChange={(e) => setNomeEquipe(e.target.value)}
              type="text"
            />
          </label>
          <label>
            Líder da Equipe:
            <input
              value={nomeLider}
              onChange={(e) => setNomeLider(e.target.value)}
              type="text"
            />
          </label>
        </Session>
        <Session>
          <label>
            Contato para contato com Líder:
            <InputMask
              value={numLider}
              onChange={(e) => setNumLider(e.target.value)}
              placeholder="(99) 9 9999-9999"
              mask="(99) 9 9999-9999"
              maskChar={null}
            />
          </label>
          <div>
            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.checked)}
              type="checkbox"
            />
            Nº possui whatsapp?
          </div>
        </Session>
        <Session>
          <label>
            E-mail do Líder:
            <input
              value={emailLider}
              onChange={(e) => setEmailLider(e.target.value)}
              type="text"
            />
          </label>
        </Session>
        <Session>
          <List value={participantes} />
          <button onClick={() => setVisible(true)}>Add</button>
        </Session>
        <Session>
          <label>Por onde você soube do campeonato?</label>
          <select
            value={conhecimento}
            onChange={(e) => setConhecimento(e.target.value)}
          >
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">Youtube</option>
            <option value="Outros">Outros</option>
          </select>
        </Session>
      </Card>
      <ButtonContainer>
        <Button text="Anterior" onClick={() => props.changePage(2)} />
        <Button text="Concluir" onClick={() => Concluir()} />
      </ButtonContainer>
      {visible && <Add close={setVisible} adicionar={adicionar} />}
    </Container>
  );
}
