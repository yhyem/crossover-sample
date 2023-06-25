import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { AxiosPosts } from "../../api/Posts";

import Content from "./Content";
import Button from "../../components/Button";

const Main = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    AxiosPosts(callbackFunctions);
  }, []);

  const callbackFunctions = {
    getDataSuccess: (data) => setPostList(data),
  };

  return (
    <>
      <MainBlock>
        <ContentBlock>
          <ButtonBlock>
            <Link to="/write">
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
            </Link>
          </ButtonBlock>
          {postList.map((item) => (
            <div key={item.id}>
              <Link to={`/post/${item.id}`}>
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
