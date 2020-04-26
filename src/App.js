import React from "react";
import logo from "./sources/logo.png";
import logoL from "./sources/logo2.png";
import Global from "./utils/Global";
import Terms from "./screens/Terms";
import Operation from "./screens/Operation";
import Cadastro from "./screens/Cadastro";
import { Container, Flags, AppTittle, AppLogo } from "./estilos/AppStyle";

class App extends React.Component {
  state = {
    page: 1,
  };
  render() {
    return (
      <Container>
        <Global />
        <Flags>
          <AppTittle>
            <AppLogo src={logo} alt="logo" />
            <h1>Arena Gamer</h1>
          </AppTittle>
          <AppTittle>
            <AppLogo src={logoL} alt="logo" />
            <h1>League of Gladiators</h1>
          </AppTittle>
        </Flags>
        {this.state.page === 1 && (
          <Terms changePage={(value) => this.setState({ page: value })} />
        )}
        {this.state.page === 2 && (
          <Operation changePage={(value) => this.setState({ page: value })} />
        )}
        {this.state.page === 3 && (
          <Cadastro changePage={(value) => this.setState({ page: value })} />
        )}
      </Container>
    );
  }
}

export default App;
