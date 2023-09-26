# [CROSSOVER SAMPLE - AIRPLANE LETTER](https://crossover-sample.vercel.app/)

멋쟁이 사자처럼 MJU 10-11 주차 세션
웹 서버 크로스 오버

<aside>
📁 필요 라이브러리

**react-hook-form
styled-components
styled-reset
react-router-dom
axios**

선택이지만 추천드립니다

**yup
@hookform/resolvers yup**

</aside>

- 이미지 asset 세팅
- Styled-reset
- Font 세팅
- Default 색상 세팅
- 폴더 구조 세팅
- 구현 파트 나누기 → 각자 브랜치 생성

**크로스 오버 디자인 파트 피그마** 

✨소현님께서 완성해주신 피그마✨

[크로스오버](https://www.figma.com/file/7xhNzHWK8oO8LEwLmFh6Na/크로스오버?type=design&node-id=39-2037&t=taVvbZJUD8SPdRbc-0)

코멘트 부분도 꼼꼼하게 확인!

✨서버팀이 완성해주신 API 문서✨
[API 문서](https://www.notion.so/likelion-11th/API-e88dd3745c6249719019b69498e10d91)

- Postman 세팅

[](https://www.postman.com/)

- api 폴더 생성
  ㄴsrc
  ㄴapi

- 기본 baseURL 세팅

- .env 파일 생성
    - REACT_APP_BASE_URL=`서버주소`
- gitignore파일에 .env 추가
- api 폴더에서 api 하나씩 구현해서 페이지에서 선언해서 사용

### **마감 : ~ 6/29 (목)**

서버 API 연결하여 기능 구현

- 로그인 / 회원가입
- 메인 페이지 - 무한 스크롤 / 24시간 전까지 : 24시간 지난 경우 : 1일전 , 2일전 …
- 게시물 작성하기
- 게시물 보여주기
- 게시물 삭제하기

무한 스크롤 예제 코드

```jsx
import { useEffect, useState } from "react";

const Main = () => {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    **/* axios 호출 (page 매개변수로 전달) */**
  }, []); // 컴포넌트가 마운트되었을 때, 처음 한 번만 실행

  const callbackFunctions = {
    getDataSuccess: (data) => {
      **/* 데이터 정상적으로 잘 받아온 경우, 기존 리스트에 새로운 데이터를 추가해주세요 */**
    },
		setPageNumber: () => **/* 페이지를 증가시켜주세요 */**
	  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        **/* axios 호출 (page 매개변수로 전달) */**
      }
    };

    window.addEventListener("scroll", handleScroll); // 스크롤이 페이지의 맨 아래에 도달했을 때만 데이터를 다시 로드
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);// 페이지 값이 변할때마다 실행
}
```

→ 무한스크롤 많이 막막하실까봐 예시코드 드립니다! `/* */` 부분에 코드를 작성해보세요!

아래에 api 까지 추가해서 배포 완료 해뒀습니당 테스트 해보시면서 본인이 구현한 것과 일치한지 확인해부세요!

해당 과정에서 이상한 점 있으시면 언제든 말해주세요!
