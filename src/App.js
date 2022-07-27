import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';


const theme = {
  bgPokedex: "#fc5454",
  bgCard: "#202020",
  bgPokedexList: "#3AABF4",
  bgPokedexListHover: "#76bceb",
  bgBtnHover: "#ccc",

  bdColorPrimary: "rgba(0,0,0,0.8)",
  bdColorSecondary: "rgba(0,0,0,0.5)",

  colorText: "#fff",
  colorTextHover: "#000"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;