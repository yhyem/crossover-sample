import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link, Navigate } from "react-router-dom";
import { AxiosPosts } from "../../api/Posts";

import Content from "./Content";
import Button from "../../components/Button";

const Main = () => {
  const isToken = localStorage.getItem("token") ? true : false;
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    AxiosPosts(page, callbackFunctions);
  }, []);

  const callbackFunctions = {
    getDataSuccess: (data) => {
      setPostList((prevData) => [...prevData, ...data]);
      setPage((prevPage) => prevPage + 1);
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        AxiosPosts(page, callbackFunctions);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <>
      {isToken ? (
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
      ) : (
        <Navigate to="/" replace={true} />
      )}
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
