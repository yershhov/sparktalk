import SparktalkRouter from "./routes/routes";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import theme from "./theme";
import AuthLayout from "./components/AuthLayout";

const AppContainer = styled.main`
  background: ${(props) => props.theme.colors.main};
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <AuthLayout>
          <SparktalkRouter />
        </AuthLayout>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
