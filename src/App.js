import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Content from "./pages/Content/Content";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/content/:id" element={<Content />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
