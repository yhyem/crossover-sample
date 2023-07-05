import { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import { validation } from "./Validation";
import PrivayPolicyForm from "./PrivayPolicyForm";
import Button from "../../components/Button";

import Delete from "../../assets/images/icon-cancel.svg";
import Warning from "../../assets/images/icon-error.svg";
import Success from "../../assets/images/icon-success.svg";
import { AxiosJoin } from "../../api/Join";
import Input from "../../components/Input";

const JoinForm = () => {
  const navigate = useNavigate();

  const [isCheck, setIsCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(validation),
    mode: "onChange",
  });

  const values = watch();

  const callbackFunctions = {
    navigateSuccess: () => navigate("/"),
  };

  const onCheck = () => {
    setIsCheck(!isCheck);
  };

  const onSubmitData = (data) => {
    AxiosJoin(data, callbackFunctions);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <JoinTop>
          <Title>회원가입</Title>
          <Label>
            <InputBlock
              iserror={errors.id ? "true" : "false"}
              issuccess={!errors.id && values.id ? "true" : "false"}
            >
              <Input
                placeholder="아이디"
                inputId="id"
                inputType="text"
                register={register}
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
            {values.id ? (
              errors.id ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="success-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.id && (
            <StateText issuccess="false">{errors.id.message}</StateText>
          )}
          {values.id && !errors.id ? (
            <StateText issuccess="true">사용 가능한 아이디 입니다.</StateText>
          ) : (
            ""
          )}
          <Label>
            <InputBlock
              iserror={errors.password ? "true" : "false"}
              issuccess={!errors.password && values.password ? "true" : "false"}
            >
              <Input
                placeholder="비밀번호"
                inputId="password"
                inputType="password"
                register={register}
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
            {values.password ? (
              errors.password ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="success-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.password && (
            <StateText issuccess="false">{errors.password.message}</StateText>
          )}
          {values.password && !errors.password ? (
            <StateText issuccess="true">사용 가능한 비밀번호 입니다.</StateText>
          ) : (
            ""
          )}
          <Label>
            <InputBlock
              iserror={errors.email ? "true" : "false"}
              issuccess={!errors.email && values.email ? "true" : "false"}
            >
              <Input
                placeholder="이메일"
                inputId="email"
                inputType="text"
                register={register}
              />
            </InputBlock>
            {values.email || errors.email ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("email", "");
                  errors.email = "";
                }}
                alt="input-email"
              />
            ) : (
              <HelpText>사용하실 이메일을 입력해주세요. </HelpText>
            )}
            {values.email ? (
              errors.email ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="success-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.email && (
            <StateText issuccess="false">{errors.email.message}</StateText>
          )}
          {values.email && !errors.email ? (
            <StateText issuccess="true">사용 가능한 이메일 입니다.</StateText>
          ) : (
            ""
          )}
        </JoinTop>
        <PrivayPolicyForm onCheck={onCheck} isCheck={isCheck} />
        <Button
          type="submit"
          setWidth="540px"
          setHeight="90px"
          fontSize="36px"
          changeBtn={
            values.id && values.password && values.email && isCheck
              ? "true"
              : "false"
          }
          isDisabled={
            values.id && values.password && values.email && isCheck
              ? false
              : true
          }
          backColor="#99CEFF"
          activeColor="#59A4FB"
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
`;

const InputBlock = styled.div`
  width: 540px;
  height: 90px;
  border: 1px solid
    ${({ iserror, theme, issuccess }) =>
      iserror === "true"
        ? theme.colors.RED
        : issuccess === "true"
        ? theme.colors.GREEN
        : theme.colors.GRAY};
  border-radius: 25px;
  padding: 33px 116px 29px 31px;

  input {
    width: 393px;
    height: 28px;
    border: none;
    font-weight: 500;
    font-size: 20px;
    color: ${({ iserror, issuccess, theme }) =>
      iserror === "true"
        ? theme.colors.RED
        : issuccess === "true"
        ? theme.colors.GREEN
        : "#000000"};

    ::placeholder {
      color: #000000;
      opacity: 45%;
    }
  }

  ::placeholder {
    color: #000000;
    opacity: 45%;
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

const DeleteButton = styled.img`
  position: absolute;
  right: 26px;
  top: 29px;
`;

const StateButton = styled.img`
  position: absolute;
  right: 66px;
  top: 29px;
`;

const StateText = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px 22.5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ issuccess }) =>
    issuccess === "true"
      ? ({ theme }) => theme.colors.GREEN
      : ({ theme }) => theme.colors.RED};
`;
