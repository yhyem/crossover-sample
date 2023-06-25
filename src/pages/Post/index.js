import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../../components/Button";
import { AxiosPost } from "../../api/Post";

const Post = () => {
  let { id } = useParams();
  console.log(id);
  const [post, setPost] = useState("");

  const { title, content, isMine } = post;

  useEffect(() => {
    AxiosPost(id, callbackFunctions);
  }, []);

  const callbackFunctions = {
    getDataSuccess: (data) => setPost(data),
  };
  return (
    <>
      <DetailBlock>
        <PostBlock>
          <PostTitle>
            <Title>제목: {title}</Title>
            <CountText>( {String(title).length} / 20 )</CountText>
          </PostTitle>
          <PostContent>
            <Content>{content}</Content>
            <CountText>( {String(content).length} / 140 )</CountText>
          </PostContent>
          {isMine && (
            <BottomBlock>
              <InfoText>※ 작성된 게시글은 수정이 불가합니다.</InfoText>
              <ButtonBlock>
                <Button
                  setWidth="233px"
                  setHeight="70px"
                  changeBtn="false"
                  fontSize="21px"
                  isDisabled={false}
                  backColor="#717171"
                >
                  삭제하기
                </Button>
              </ButtonBlock>
            </BottomBlock>
          )}
        </PostBlock>
      </DetailBlock>
    </>
  );
};

export default Post;

const DetailBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const PostBlock = styled.div`
  width: 794px;
  height: 1092px;
  margin-top: 46px;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  width: 794px;
  height: 134px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  padding: 55px 46px 55px 35px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  width: 613px;
  height: 24px;
`;

const PostContent = styled.div`
  margin-top: 16px;
  padding: 35px 45px 53px 35px;
  width: 794px;
  height: 751px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`;

const Content = styled.div`
  width: 714px;
  height: 627px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 12px;
`;

const BottomBlock = styled.div`
  margin-top: 16px;
  width: 794px;
  height: 151px;
  padding: 16px 33px 24px 35px;
`;

const InfoText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

const CountText = styled.div`
  float: right;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
  height: 24px;
`;

const ButtonBlock = styled.div`
  float: right;
  margin-top: 17px;
`;
