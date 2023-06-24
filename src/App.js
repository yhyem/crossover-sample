import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Post from "./pages/Post";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import WritePost from "./pages/WritePost";

function App() {
  const isLogin = localStorage.getItem("token");

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Post />} />
        <Route path="/write" element={<WritePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
