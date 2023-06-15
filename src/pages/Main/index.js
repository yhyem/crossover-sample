import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

import Content from "./Content";
import Button from "../../components/Button";

import { MockupData } from "./MokupData";

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
              changeBtn="false"
              fontSize="21px"
              isDisabled={false}
              backColor="#2186FC"
            >
              작성하기
            </Button>
          </ButtonBlock>
          {data.map((item) => (
            <div key={item.id}>
              <Link to={`/content/${item.id}`}>
                <Content data={item} />
              </Link>
            </div>
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
