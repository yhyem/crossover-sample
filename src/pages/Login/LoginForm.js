import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { validation } from "./Validation";
import Button from "../../components/Button";

import Delete from "../../assets/images/icon-cancel.svg";
import Warning from "../../assets/images/icon-error.svg";

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(validation),
  });

  const values = watch();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Title>로그인</Title>
        <LoginTop>
          <Label>
            <InputBlock iserror={errors.id ? "true" : "false"}>
              <input
                placeholder="아이디"
                id="id"
                type="id"
                {...register("id")}
              />
            </InputBlock>
            {values.id || errors.id ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("id", "");
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
          {values.id && !errors.id ? <Gap /> : ""}
          <Label>
            <InputBlock iserror={errors.password ? "true" : "false"}>
              <input
                placeholder="비밀번호"
                id="password"
                type="password"
                {...register("password")}
              />
            </InputBlock>
            {values.password || errors.password ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("password", "");
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
          changeBtn={values.id && values.password ? "true" : "false"}
          isDisabled={values.id && values.password ? false : true}
          backColor="#99CEFF"
          activeColor="#59A4FB"
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
`;

const InputBlock = styled.div`
  width: 540px;
  height: 90px;
  border: 1px solid
    ${({ iserror, theme }) =>
      iserror === "true" ? theme.colors.RED : theme.colors.GRAY};
  border-radius: 25px;
  padding: 33px 116px 29px 31px;

  input {
    width: 393px;
    height: 28px;
    border: none;
    font-weight: 500;
    font-size: 20px;
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
  top: 29px;
`;

const ErrorButton = styled.img`
  position: absolute;
  right: 66px;
  top: 29px;
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
