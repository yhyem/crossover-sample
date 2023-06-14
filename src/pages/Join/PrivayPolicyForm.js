import { styled } from "styled-components";
import { PrivacyAgreement } from "../../assets/data/PrivacyAgreement";
import { useState } from "react";
import checkFalse from "../../assets/images/check-false.svg";
import checkTrue from "../../assets/images/check-true.svg";

const PrivayPolicyForm = () => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <>
      <PrivayPolicyBlock>
        <TitleBlock>
          <WrapTitle>
            <Title font="#2BCD3B">[필수]</Title>
            <Title font="#000000">&nbsp;개인정보보호정책</Title>
          </WrapTitle>
          {isCheck ? (
            <CheckBox src={checkTrue} onClick={() => setIsCheck(false)} />
          ) : (
            <CheckBox src={checkFalse} onClick={() => setIsCheck(true)} />
          )}
        </TitleBlock>
        <ContentBlock>
          <Content>{PrivacyAgreement}</Content>
        </ContentBlock>
      </PrivayPolicyBlock>
    </>
  );
};

export default PrivayPolicyForm;

const PrivayPolicyBlock = styled.div`
  margin-top: 34px;
`;

const TitleBlock = styled.div`
  display: flex;
`;

const WrapTitle = styled.div`
  display: flex;
  padding: 7px 0 14px 19px;
`;

const Title = styled.div`
  color: ${({ font }) => font};
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

const CheckBox = styled.img`
  margin: 3px 16px 10px auto;
  width: 112px;
  height: 32px;
`;

const ContentBlock = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  padding: 19px 16px 19px 30px;
  text-align: left;
  margin-bottom: 114px;
`;

const Content = styled.div`
  padding-right: 26px;
  overflow-y: scroll;
  white-space: pre-wrap;
  width: 1166px;
  height: 342px;
  &::-webkit-scrollbar {
    background: none;
    width: 5px;
    height: 37px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.GRAY};
    border-radius: 99px;
  }
`;
