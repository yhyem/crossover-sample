import { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { initialValues, validation } from "./Validation";
import Button from "../../components/Button";

import Delete from "../../assets/images/icon-cancel.svg";
import Warning from "../../assets/images/icon-error.svg";

const LoginForm = () => {
  const [info, setInfo] = useState(initialValues);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <LoginTop>
          <Label iserror={errors.id ? "true" : "false"}>
            <input
              placeholder="아이디"
              id="id"
              type="id"
              {...register("id")}
              onChange={(e) => setInfo({ ...info, id: e.target.value })}
              value={info.id}
            />
            {info.id || errors.id ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setInfo({ ...info, id: "" });
                  errors.id = "";
                }}
                alt="input-id"
              />
            ) : (
              <HelpText>
                영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
              </HelpText>
            )}
            {errors.id ? (
              <ErrorButton src={Warning} alt="warning-button" />
            ) : (
              ""
            )}
          </Label>
          {errors.id && <ErrorText>{errors.id.message}</ErrorText>}
          {info.id && !errors.id ? <Gap /> : ""}
          <Label iserror={errors.password ? "true" : "false"}>
            <input
              placeholder="비밀번호"
              id="password"
              type="password"
              {...register("password")}
              onChange={(e) => setInfo({ ...info, password: e.target.value })}
              value={info.password}
            />
            {info.password || errors.password ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setInfo({ ...info, password: "" });
                  errors.password = "";
                }}
                alt="input-password"
              />
            ) : (
              <HelpText>
                영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
                주세요.
              </HelpText>
            )}
            {errors.password ? (
              <ErrorButton src={Warning} alt="warning-button" />
            ) : (
              ""
            )}
          </Label>
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </LoginTop>
        <Button
          type="submit"
          setWidth="540px"
          setHeight="90px"
          fontSize="36px"
          changeBtn={info.id && info.password ? "true" : "false"}
          isDisabled={info.id && info.password ? false : true}
          backColor="#99CEFF"
        >
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
  color: #000000;
  margin: 31px 0 74px 0;
`;

const LoginTop = styled.div`
  width: 540px;
  height: 264px;
  margin-bottom: 56px;
`;

const Label = styled.label`
  position: relative;
  width: 540px;
  height: 90px;
  input {
    width: 540px;
    height: 90px;
    border: 1px solid
      ${({ iserror, theme }) =>
        iserror === "true" ? theme.colors.RED : theme.colors.GRAY};
    border-radius: 25px;
    font-weight: 500;
    font-size: 20px;
    padding-left: 28.5px;
    color: ${({ iserror, theme }) =>
      iserror === "true" ? theme.colors.RED : "#000000"};

    ::placeholder {
      color: #000000;
      opacity: 45%;
    }
  }
`;

const Gap = styled.div`
  height: 16px;
`;

const DeleteButton = styled.img`
  position: absolute;
  right: 26px;
  margin-top: 29px;
`;

const ErrorButton = styled.img`
  position: absolute;
  right: 66px;
  margin-top: 29px;
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

const ErrorText = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px 22.5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.RED};
`;
