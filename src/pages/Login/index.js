import { styled } from "styled-components";
import { Link, Navigate } from "react-router-dom";

import LoginForm from "./LoginForm";

const Login = () => {
  const isToken = localStorage.getItem("token") ? true : false;

  return (
    <>
      {isToken ? (
        <Navigate to="/main" replace={true} />
      ) : (
        <LoginBlock>
          <ContentBlock>
            <LoginForm />
            <JoinButton>
              <Link to="/join">회원가입</Link>
            </JoinButton>
          </ContentBlock>
        </LoginBlock>
      )}
    </>
  );
};

export default Login;

const LoginBlock = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContentBlock = styled.div`
  width: 540px;
  height: 640px;
  margin-top: 114px;
`;

const JoinButton = styled.button`
  margin-top: 31px;
  float: right;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
`;
