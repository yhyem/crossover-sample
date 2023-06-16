import { styled } from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../components/Button";

const WritePost = () => {
  const [titleCount, setTitleCount] = useState("");
  const [contentCount, setContentCount] = useState("");

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <DetailBlock>
        <PostBlock>
          <form onSubmit={handleSubmit(onSubmit)}>
            <PostTitle>
              <Title>제목:</Title>
              <TitleInput
                maxLength={20}
                id="title"
                type="text"
                {...register("title")}
                onChange={(e) => setTitleCount(e.target.value)}
              />
              <CountText>({titleCount.length}/20)</CountText>
            </PostTitle>
            <PostContent>
              <ContentBlock>
                <ContentInput
                  maxLength={140}
                  id="content"
                  type="text"
                  {...register("content")}
                  onChange={(e) => setContentCount(e.target.value)}
                />
              </ContentBlock>
              <CountText>({contentCount.length}/140)</CountText>
            </PostContent>
            <BottomBlock>
              <InfoText>※ 작성된 게시글은 수정이 불가합니다.</InfoText>
              <ButtonBlock>
                <Button
                  type="submit"
                  setWidth="233px"
                  setHeight="70px"
                  changeBtn={titleCount && contentCount ? "true" : "false"}
                  isDisabled={titleCount && titleCount ? false : true}
                  fontSize="21px"
                  backColor="#99CEFF"
                  activeColor="#2186FC"
                >
                  작성하기
                </Button>
              </ButtonBlock>
            </BottomBlock>
          </form>
        </PostBlock>
      </DetailBlock>
    </>
  );
};

export default WritePost;

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
  height: 24px;
  width: 49px;
`;

const TitleInput = styled.input`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  height: 24px;
  width: 582px;
  border: none;
`;

const PostContent = styled.div`
  margin-top: 16px;
  padding: 35px 45px 53px 35px;
  width: 794px;
  height: 751px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
`;

const ContentBlock = styled.div`
  display: flex;
`;

const ContentInput = styled.textarea`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  height: 627px;
  width: 673px;
  border: none;
  resize: none;

  &:focus {
    outline: none;
  }
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
  width: 82px;
  height: 24px;
`;

const ButtonBlock = styled.div`
  float: right;
  margin-top: 17px;
`;
