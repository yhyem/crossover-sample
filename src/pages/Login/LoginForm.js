import { useState } from "react";
import { styled } from "styled-components";

import Button from "../../components/Button";

const LoginForm = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <>
      <form>
        <Title>로그인</Title>
        <LoginInput placeholder="아이디" />
        <LoginInput placeholder="비밀번호" />
        <Button setWidth="540px" setHeight="90px" changeBtn={isActive}>
          로그인
        </Button>
      </form>
    </>
  );
};

export default LoginForm;

const Title = styled.div`
  font-size: 54px;
  font-weight: 600;
  color: "#000000";
  margin: 31px 0 74px 0;
`;

const LoginInput = styled.input`
  width: 540px;
  height: 90px;
  border: 1px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 16px;
  padding-left: 28.5px;

  ::placeholder {
    color: #000000;
    opacity: 45%;
  }
`;
