import { useState } from "react";
import Content from "./Content";
import { MockupData } from "./MokupData";
import Button from "../../components/Button";
import { styled } from "styled-components";

const Main = () => {
  const [data, setData] = useState(MockupData);

  return (
    <>
      <MainBlock>
        <ContentBlock>
          <ButtonBlock>
            <Button
              setWidth="233px"
              setHeight="70px"
              changeBtn="true"
              fontSize="21px"
              isDisabled={false}
            >
              작성하기
            </Button>
          </ButtonBlock>
          {data.map((item) => (
            <Content key={item.id} data={item} />
          ))}
        </ContentBlock>
      </MainBlock>
    </>
  );
};

export default Main;

const MainBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentBlock = styled.div`
  width: 783px;
  margin-top: 20px;
`;

const ButtonBlock = styled.div`
  float: right;
  margin-bottom: 23px;
`;
