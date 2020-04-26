import React from "react";
import Card from "../utils/Card";
import image from "../sources/Chaves.png";
import { ButtonContainer, Button } from "../utils/Button";
import { Container, Content, Image } from "../estilos/OperationStyle";

export default function Operation(props) {
  return (
    <Container>
      <Card>
        <h1>Organização do Evento</h1>
        <Content>
        <h4>Funcionamento do Campeonato</h4>
        <p>● O campeonato será realizado em 2(duas) fases, sendo elas a fase classificatória e a fase de partidas melhor de 1(Md1).</p>
        <p>● Na 1a fase, a fase classificatória, As equipes serão divididas de acordo com os pontos ganhos, em dois grupos. As equipes com mais pontos vão para a série A e as equipes com menos pontos vão para a série B.</p>
        <p>● As equipes da série A disputarão o 1º, 2º e 3º Prêmio e as Equipes da Série B disputarão o 4º e 5º prêmio.</p>
        <p>● As equipes terão de estar de acordo com o regulamento apresentado anteriormente, sendo obrigação dos competidores informarem alguma irregularidade nos oponentes e obrigação da administração tomar atitudes quanto ao ocorrido.</p>
        <p>Logo Abaixo há um exemplo de como funcionam as fases, abra a imagem em uma nova aba para melhor visualização.</p>
        <Image src={image} />
        </Content>
      </Card>
      <ButtonContainer>
        <Button text="Anterior" onClick={() => props.changePage(1)} />
        <Button text="Próxima" onClick={() => props.changePage(3)} />
      </ButtonContainer>
    </Container>
  );
}
