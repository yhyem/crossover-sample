import { useState } from "react";
import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { initialValues, validation } from "./Validation";
import PrivayPolicyForm from "./PrivayPolicyForm";
import Button from "../../components/Button";

import Delete from "../../assets/images/icon-cancel.svg";
import Warning from "../../assets/images/icon-error.svg";
import Success from "../../assets/images/icon-success.svg";

const JoinForm = () => {
  const [info, setInfo] = useState(initialValues);
  const [isCheck, setIsCheck] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(validation),
    mode: "onChange",
  });

  const onCheck = () => {
    setIsCheck(!isCheck);
  };

  const onSubmit = (data) => {
    setInfo(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <JoinTop>
          <Title>회원가입</Title>
          <Label
            iserror={errors.id ? "true" : "false"}
            issuccess={!errors.id && getValues("id") ? "true" : "false"}
          >
            <input
              placeholder="아이디"
              id="id"
              type="text"
              {...register("id")}
            />
            {getValues("id") || errors.id ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("id", "");
                  errors.id = "";
                  setInfo({ ...info, id: "" });
                }}
                alt="input-id"
              />
            ) : (
              <HelpText>
                영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
              </HelpText>
            )}
            {getValues("id") ? (
              errors.id ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="warning-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.id && (
            <StateText issuccess="false">{errors.id.message}</StateText>
          )}
          {getValues("id") && !errors.id ? (
            <StateText issuccess="true">사용 가능한 아이디 입니다.</StateText>
          ) : (
            ""
          )}
          <Label
            iserror={errors.password ? "true" : "false"}
            issuccess={
              !errors.password && getValues("password") ? "true" : "false"
            }
          >
            <input
              placeholder="비밀번호"
              id="password"
              type="password"
              {...register("password")}
            />
            {getValues("password") || errors.password ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("password", "");
                  errors.password = "";
                  setInfo({ ...info, password: "" });
                }}
                alt="input-password"
              />
            ) : (
              <HelpText>
                영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
                주세요.
              </HelpText>
            )}
            {getValues("password") ? (
              errors.password ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="warning-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.password && (
            <StateText issuccess="false">{errors.password.message}</StateText>
          )}
          {getValues("password") && !errors.password ? (
            <StateText issuccess="true">사용 가능한 비밀번호 입니다.</StateText>
          ) : (
            ""
          )}
          <Label
            iserror={errors.email ? "true" : "false"}
            issuccess={!errors.email && getValues("email") ? "true" : "false"}
          >
            <input
              placeholder="이메일"
              id="email"
              type="text"
              {...register("email")}
            />
            {getValues("email") || errors.email ? (
              <DeleteButton
                src={Delete}
                onClick={() => {
                  setValue("email", "");
                  errors.email = "";
                  setInfo({ ...info, email: "" });
                }}
                alt="input-email"
              />
            ) : (
              <HelpText>
                영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
              </HelpText>
            )}
            {getValues("email") ? (
              errors.email ? (
                <StateButton src={Warning} alt="warning-button" />
              ) : (
                <StateButton src={Success} alt="warning-button" />
              )
            ) : (
              ""
            )}
          </Label>
          {errors.email && (
            <StateText issuccess="false">{errors.email.message}</StateText>
          )}
          {getValues("email") && !errors.email ? (
            <StateText issuccess="true">사용 가능한 아이디 입니다.</StateText>
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
            getValues("id") &&
            getValues("password") &&
            getValues("email") &&
            isCheck
              ? "true"
              : "false"
          }
          isDisabled={
            getValues("id") &&
            getValues("password") &&
            getValues("email") &&
            isCheck
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
  input {
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
    font-weight: 500;
    font-size: 20px;
    padding-left: 28.5px;
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
  margin-top: 29px;
`;

const StateButton = styled.img`
  position: absolute;
  right: 66px;
  margin-top: 29px;
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
