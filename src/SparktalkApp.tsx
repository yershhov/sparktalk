import SparktalkRouter from "./routes/routes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/globalStyle";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./store";

const AppContainer = styled.main`
  background: ${(props) => props.theme.colors.black};
  color: white;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <AppContainer>
          <SparktalkRouter />
        </AppContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
