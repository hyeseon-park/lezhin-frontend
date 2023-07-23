# 로컬 환경에서 시작하기

npm run start

# 경로

/ : 메인 페이지
/ranking : 랭킹 페이지(과제)

메인 페이지 가운데 이미지 클릭하면 랭킹 페이지로 이동합니다.
주소 입력해서 이동하셔도 됩니다.

# 구조

/apis : API 호출 파일 모음
/components : 컴포넌트 모음
/context : Context API 파일 모음
/images : 이미지 모음
/interfaces : 인터페이스 모음
/mocks : mock 데이터와 msw 사용을 위한 파일 모음
/pages : 페이지 모음
/shared : 전역적으로 사용되는 스타일 관련 파일 모음
-/common : 폰트 색깔, 사이즈
-/global : 전역 스타일
-/guide : UI 가이드
-/style : 스타일 파일
/utils : 공통적으로 사용되는 유틸 함수 모음
App.tsx : 전역스타일, Context API, 라우팅, URL 쿼리 파라미터 디폴트 값 적용
index.tsx : 엔트리 포인트

# 사용한 라이브러리

react : 현재 레진 엔터테인먼트에서 필요로 하는 능력 중 하나 같아서,
컴포넌트 단위로 개발하기 위해서, 효율적인 렌더링을 위해서, 다양한 리액트 라이브러리를 사용하기 위해서 등..
react-router-dom : 라우팅을 위해 사용
styled-components : 컴포넌트 단위로 스타일을 관리하기 위해 사용
styled-reset : 스타일을 초기화하여 브라우저 간의 스타일 차이를 없애기 위해 사용
react-infinite-scroller : 무한 스크롤을 간편하게 구현하기 위해 사용
msw : mock 데이터를 API 요청을 통해서 가져오기 위해 사용

# 필터 관련...

처음 진입 시에는 연재중 작품과 완결 작품 모두 포함해서 노출되게 했습니다.
최초로 '연재중' 또는 '완결'을 클릭해서 on 할 때부터 배타적으로 노출됩니다.

필터 클릭 시 리스트에 적용되는 조건은 다음과 같습니다.

'연재중' 클릭 -> 연재중인 작품만 노출
'완결' 클릭 - 완결 작품만 노출
'무료회차 3회 이상' 클릭 -> 무료회차 3회 이상 작품만 노출
'단행본 작품' 클릭 -> 단행본 작품만 노출

# Context를 사용한 이유...

리스트와 필터링 값을 전역적으로 관리하여 페이지를 이동했을 때도 값이 그대로 유지되도록 하기 위해 사용했습니다.

# 기타...

자세한 설명은 주석으로 작성해두었습니다.
