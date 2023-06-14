import { styled } from "styled-components";
import JoinForm from "./JoinForm";

const Join = () => {
  return (
    <>
      <JoinBlock>
        <ContentBlock>
          <JoinForm />
        </ContentBlock>
      </JoinBlock>
    </>
  );
};

export default Join;

const JoinBlock = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const ContentBlock = styled.div`
  margin-top: 114px;
`;
