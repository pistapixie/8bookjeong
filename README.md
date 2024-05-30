# 📚팔북정
## 목차
- [👀 프로젝트 소개](#프로젝트-소개)
- [👨‍👩‍👧‍👦팀 소개](#팀-소개)
- [🛠 기술 스택](#기술-스택)
- [🔀 flow](#flow)
- [구현 기능 & 화면 구성](#구현-기능--화면-구성)
- [회고](#회고)

## 🥇코딩알려주는누나 리액트 스터디 1등
[유튜브 바로가기](https://www.youtube.com/watch?v=H7wtij7kghE) <br/>

<a href="https://www.youtube.com/watch?v=H7wtij7kghE" target="_blank">
  <img src="https://github.com/react8jo/react-team/assets/138554290/76989357-8274-4bc4-b125-ee4f90ec5782" alt="스크린샷" width="50%"/>
</a>


<a name="프로젝트-소개"></a>
## 프로젝트 소개


<a name="팀-소개"></a>
### 👥 팀 소개
|  팀원  |        역할        |                담당 파트                 |                  깃허브 주소                  |
| :----: | :----------------: | :--------------------------------------: | :-------------------------------------------: |
| 이현서 | 프로젝트 오너 (PO) |           발표, 상세 정보 페이지, 플로팅 버튼           |  [pistapixie](https://github.com/pistapixie)  |
| 김지윤 |   스크럼 마스터    | 메인 배너(블로그추천, 신간), 광고배너, 푸터  |   [kirnjiyun](https://github.com/kirnjiyun)   |
| 권혁준 |        팀원        |    카테고리 페이지, 페이지네이션    | [red-dev-Mark](https://github.com/red-dev-Mark) |
|  박샘  |        팀원        | 404, 로딩,장바구니, 결제 페이지 |    [seambark](https://github.com/seambark)    |
| 박영호 |        팀원        |  메인 도서 리스트(베스트, 신간, 추천)   |    [ZeroTTTT](https://github.com/ZeroTTTT)    |
| 이승희 |        팀원        |    검색 페이지, 페이지네이션     |      [HSLE24](https://github.com/HSLE24)      |

#### 프로젝트 목표

- 팀 목표
  - 목표한 부분만큼은 확실하게, 단기간에 최선의 아웃풋을 만들어보자!
- 개인 목표
  - 이현서: 일주일이라는 한정된 리소스 안에서의 프로젝트 경험해보기.
  - 김지윤:
  - 권혁준: API 활용 및 협업을 통한 프로젝트 진행 경험
  - 박 샘: 리엑트에 좀 더 친숙해지고, 리액트로 협업 작업해보기.
  - 박영호: 프로젝트트 완성 후 배포까지 경험해보기.
  - 이승희: 다른 사람들과 함께 협업하는 과정을 경험해보기.

### 프로젝트 소개
<table>
  <tr>
    <td>
      <img src="./src/assets/images/QR.png" alt="팔북정 QR" width="100" />
    </td>
    <td>
      - 배포 페이지 <a href="https://palbookjung.netlify.app/" target="_blank">바로가기</a><br/>
      - 발표 ppt <a href="https://bit.ly/4b7AT6N" target="_blank">바로가기</a><br/>
      - 노션 페이지 <a href="https://zrr.kr/F2LG" target="_blank">바로가기</a>
    </td>
  </tr>
</table>



#### 🗓️ 개발 일정 및 진행방식

- 개발 기간: 2024.04.14 ~ 2024.04.21
- 진행 방식: 애자일, 스크럼, 스탠드업 미팅 등

#### 팀 컨벤션

- 깃 컨벤션
  - 브랜치 전략
  - 커밋 메시지 규칙
    - 기본 형식: [태그] 제목 <br/>
    ex) [Feat] 리스트 랜더링 구현
    - 태그 종류:<br/>
    Feat: 새로운 기능 추가<br/>
    Modify: 기존 코드의 수정<br/>
    Delete: 코드 또는 파일의 삭제<br/>
    Merge: 브랜치의 병합<br/>
- 코드 컨벤션
  - 코드 스타일
  - 네이밍 규칙
    - code-id: 카멜 케이스 사용
    - className: 카멜 케이스 사용
    - 함수명: 카멜 케이스 사용 예) showModal
    - 이벤트 함수명: handle 접두사 사용 예) handleClick
    - assets명: 띄어쓰기 대신 언더바 사용, 영어 사용 예) show_modal.jpg
    - 작명 시 줄임말 사용 금지: 명확한 의미 전달을 위해 줄임말을 사용하지 않습니다.

#### 🛠️ 기술 및 개발 환경

 <img width="570" alt="Screenshot 2024-05-13 at 2 39 07 PM" src="https://github.com/react8jo/8bookjeong/assets/144419094/d1d76b9a-b378-4a72-a288-9f98af39e26a">


### 서비스 소개

#### 주제

- 서비스 개요
- 타겟 사용자
- 주요 기능

#### 디자인

- 로고 디자인 <br/>
  <img src="./src/assets/images/logo.png" alt="팔북정 로고" width="30%"/>

- 컬러 팔레트 <br/>
  <img src="./src/assets/images/color.png" alt="팔북정 컬러 팔레트" width="30%"/>


## 📱 구현 (모바일 버전)

### 메인 페이지

| 전체 스크롤 |  배너 캐러셀  | 도서 리스트  |
| :---------------: | :-----------------: | :---------------: |
| <img src="https://github.com/react8jo/8bookjeong/assets/144419094/15693e88-366e-45f4-b2a2-8b39d9990779" width="200">   |     <img src="https://github.com/react8jo/8bookjeong/assets/144419094/a7e7f899-b875-45dd-9a36-4a8532d15995" width="200">     | <img src="https://github.com/react8jo/8bookjeong/assets/144419094/781c30c3-eb7d-4d67-8587-2ec4711ede23" width="200">|
 

### 카테고리 및 검색 페이지

| 카테고리 페이지 | 검색 페이지 |
| :---------------: | :-----------------: |
|     ![필터 (1)](https://github.com/react8jo/8bookjeong/assets/144419094/3dbfe25c-8461-441b-bf22-c7b05fca9522) | <img src="https://github.com/react8jo/8bookjeong/assets/144419094/dd28e75f-d3f1-4692-8718-ab7e9b52c72d" width="200">| 
 


### 디테일 페이지

| 전체 스크롤 | 네비게이션 탭 | 
| :---------------: | :-----------------: |
|<img src="https://github.com/react8jo/8bookjeong/assets/144419094/7f3e7b81-a1d5-447f-af1b-d1b12eea01a0" width="200">  |  <img src="https://github.com/react8jo/8bookjeong/assets/144419094/a7587f95-fad0-444c-98c4-d50694a9d0b7" width="200">
    


### 장바구니, 결제 및 404 페이지

|장바구니 페이지 | 구매 페이지| 404 페이지 |
| :---------------: | :-----------------: |:--------: |
|  <img src= "https://github.com/react8jo/8bookjeong/assets/144419094/01d139cf-f622-4896-9c12-a8b0242343a9" width="200">| <img src="https://github.com/react8jo/8bookjeong/assets/144419094/c50149e1-f73e-4465-a78b-708fc2fa181b" width="200"> | <img src="https://github.com/react8jo/8bookjeong/assets/144419094/802dd349-0648-4690-9334-c4ffe5f39a35" width="200"> |



## 🖥️ 반응형 구현 (데스크탑버전)

| 메인페이지 스크롤 | 메인 배너 캐러셀 | 상세페이지 스크롤 |
| :---------------: | :-----------------: | :---------------: |
|    사진넣는곳     |  |    사진넣는곳     |

| 메인페이지 스크롤 | 검색어 입력 후 결과 | 상세페이지 스크롤 |
| :---------------: | :-----------------: | :---------------: |
|    사진넣는곳     |     사진넣는곳      |    사진넣는곳     |


## 🖋️ 프로젝트 리뷰

### 📍 이슈 / 트러블 슈팅

### ✔️ CORS 이슈
- 문제 상황 <br/>
  CORS(Cross-Origin Resource Sharing) 정책으로 인해, 알라딘 API를 통해 데이터를 가져올 때 브라우저에서의 직접적인 API 호출이 차단되는 이슈가 발생. CORS 이슈란, 브라우저의 보안 정책에 따라, 다른 도메인에서의 자원 요청은 차단하는 것. 따라서 클라이언트에서 직접 알라딘 API를 호출하는 경우, CORS 문제가 발생해 데이터를 가져올 수 없는 상황 발생.
- 해결 방안 <br/>
  미들웨어 구축

### 📍 리팩토링 계획

- 기획 단계에서 Should 및 Could(MoSCoW 방법론)에 배분해 두었던 기능들을 구현하여 프로젝트의 완성도를 높이기.
    <br/>(장바구니, 찜, 결제, 로그인/로그아웃 등)
- 다크모드

<a name="회고"></a>
### 📍 회고
- 이현서 : 최고의 팀원들 덕분에 1주일이라는 정말 짧은 기간의 프로젝트임에도 큰 이슈없이 
기획-개발-배포의 사이클을 돌아볼 수 있었던 것 같습니다. 한정된 기간 안에서 효율적으로 시간 배분하여 몰입하는 경험을 할 수 있어 좋았습니다!
- 김지윤 : 혼자였으면 마무리 짓지 못했을텐데 짧은 시간동안 
속도감있게 프로젝트를 진행하게 되어서 너무 좋았습니다.
- 권혁준: 짧은 기간 내 하나의 서비스를 만드는 몰입의 시간을 경험할 수 있었습니다. 또 단순 학습으로는 경험해보지 못 한 에러 및 이슈들을 해결하는 과정을 통해 많은 성장을 이룰 수 있었습니다.
- 박샘 : 시간도 짧고 정신없었지만 다들 열심히 해주셔서 재미나게 했습니다!
- 박영호: 프로젝트를 시작하기에는 부족한 부분이 많았는데 팀원들이 잘 이끌어주셔서 
많이 배우면서 즐겁게 프로젝트 마무리 할 수 있었습니다.
- 이승희 : 초반에 틀을 꼼꼼히 잘 잡고, 끝까지 다들 의욕적으로 참여하셔서 빠른 진행이 가능했네요! <br/>
덕분에 협업하는 법, 프로젝트를 진행하는 법에 대해 배울 수 있었습니다! 고생하셨습니다~






