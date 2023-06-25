import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import Post from "./pages/Post";

import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import WritePost from "./pages/WritePost";
import { useEffect, useState } from "react";

function App() {
  const isToken = localStorage.getItem("token") ? true : false;
  const [isLogin, setIsLogin] = useState(isToken);

  useEffect(() => {
    setIsLogin(isToken);
  }, [isToken]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        {isLogin ? (
          <>
            <Route path="/" element={<Main />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/write" element={<WritePost />} />
          </>
        ) : (
          <>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/join" element={<Join />} />
          </>
        )}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
