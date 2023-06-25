import { styled } from "styled-components";

import profile from "../../assets/images/icon-profile.svg";
import myprofile from "../../assets/images/icon-profile-me.svg";

const Content = ({ data }) => {
  const { isMine, title, content, createdAt } = data;
  const createTime = new Date(createdAt);
  const timeTerm = (new Date() - new Date(createdAt)) / 1000 / 60 / 60;
  const isOverDate = timeTerm > 24 ? true : false;

  return (
    <>
      <ContentBlock>
        {isMine ? (
          <Profile src={myprofile} alt="myprofile" />
        ) : (
          <Profile src={profile} alt="profile" />
        )}
        <Post>
          <Title>제목: {title}</Title>
          <PostContent>{content}</PostContent>
          {isOverDate ? (
            <Time>{Math.floor(timeTerm / 24)}일전</Time>
          ) : (
            <Time>
              {createTime.getHours() +
                ":" +
                (createTime.getMinutes() < 10
                  ? "0" + createTime.getMinutes()
                  : createTime.getMinutes())}
            </Time>
          )}
        </Post>
      </ContentBlock>
    </>
  );
};

export default Content;

const ContentBlock = styled.div`
  display: flex;
  width: 783px;
  height: 343px;
  border: 2px solid ${({ theme }) => theme.colors.GRAY};
  border-radius: 25px;
  margin-bottom: 54px;
  padding: 35px 42px;
`;

const Profile = styled.img`
  width: 62px;
  height: 62px;
`;

const Post = styled.div`
  margin-left: 39px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 17px;
`;

const PostContent = styled.div`
  width: 598px;
  height: 198px;
  border: 2px solid ${({ theme }) => theme.colors.BLUE1};
  border-radius: 25px;
  padding: 20px 22px 16px 26px;
`;

const Time = styled.div`
  float: right;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.GRAY};
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
