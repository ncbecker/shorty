import React from "react";
import Shorties from "./pages/Shorties";
import styled from "styled-components/macro";
import GlobalStyle from "./GlobalStyle";
import logoSrc from "./assets/logo.svg";
import { I18nProvider } from "./contexts/i18n";
import { LocalSelect } from "./components/LocalSelect";

const Container = styled.div`
  max-width: 1000px;
  width: 80%;
  margin: 0 auto;

  header {
    display: flex;

    img {
      margin-right: 0.5em;
    }
  }
`;

const App = () => {
  return (
    <>
      <I18nProvider>
        <GlobalStyle />
        <Container>
          <header>
            <img src={logoSrc} alt="shorty Logo with pants" />
            <h1>shorty</h1>
            <LocalSelect />
          </header>
          <main>
            <Shorties />
          </main>
        </Container>
      </I18nProvider>
    </>
  );
};

export default App;
