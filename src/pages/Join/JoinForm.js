import { styled } from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import PrivayPolicyForm from "./PrivayPolicyForm";
import Button from "../../components/Button";
import { initialValues } from "./Validation";
import Delete from "../../assets/images/icon-cancel.svg";

const JoinForm = () => {
  const [info, setInfo] = useState(initialValues);
  const { register, handleSubmit } = useForm();

  return (
    <>
      <form>
        <JoinTop>
          <Title>회원가입</Title>
          <Label>
            <input
              placeholder="아이디"
              id="id"
              type="id"
              {...register("id")}
              onChange={(e) => setInfo({ ...info, id: e.target.value })}
              value={info.id}
            />
            {info.id ? (
              <img
                src={Delete}
                onClick={() => setInfo({ ...info, id: "" })}
                alt="id-input"
              />
            ) : (
              <HelpText>
                영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
              </HelpText>
            )}
          </Label>
          <Label>
            <input
              placeholder="비밀번호"
              id="password"
              type="password"
              {...register("password")}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              value={info.password}
            />
            {info.password ? (
              <img
                src={Delete}
                onClick={() => setInfo({ ...info, password: "" })}
                alt="password-input"
              />
            ) : (
              <HelpText>
                영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
                주세요.
              </HelpText>
            )}
          </Label>
          <Label>
            <input
              placeholder="이메일"
              id="email"
              type="email"
              {...register("email")}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
              value={info.email}
            />
            {info.email ? (
              <img
                src={Delete}
                onClick={() => setInfo({ ...info, email: "" })}
                alt="email-input"
              />
            ) : (
              <HelpText>사용하실 이메일을 입력해주세요.</HelpText>
            )}
          </Label>
        </JoinTop>
        <PrivayPolicyForm />
        <Button
          setWidth="540px"
          setHeight="90px"
          changeBtn={info.id && info.password && info.email ? "true" : "false"}
        >
          완료하기
        </Button>
      </form>
    </>
  );
};

export default JoinForm;

const JoinTop = styled.div`
  width: 540px;
  height: 592px;
  margin: auto;
`;

const Title = styled.div`
  font-size: 54px;
  font-weight: 600;
  color: "#000000";
  margin: 31px 0 74px 0;
`;

const Label = styled.label`
  position: relative;
  width: 540px;
  height: 90px;
  input {
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
  }
  img {
    position: absolute;
    right: 26px;
    margin-top: 29px;
  }
`;

const HelpText = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px 22.5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  opacity: 45%;
`;
