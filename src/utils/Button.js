import React from "react";
import { ButtonCont, But, FakeBut } from "../estilos/Styles";

export function ButtonContainer(props) {
  return <ButtonCont>{props.children}</ButtonCont>;
}

export function Button(props) {
  return <But onClick={props.onClick}>{props.text}</But>;
}

export function FakeButton() {
  return <FakeBut> </FakeBut>;
}
