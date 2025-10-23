# Context API와 useReducer를 활용한 React Todo List 프로젝트

- 25/10/20 start! ~ 10/22 finished!

- 코딩 기록

# TodoContext 구성 단계 정리

- Context 생성 → 상태 + reducer 정의 → Provider 생성 → 앱에 적용 → 커스텀 훅으로 사용

1. createContext() - 전역 상태 저장소를 생성(TodoContext)
2. initalState = [] - 초기값은 빈배열로 설정
3. todoReducer() - 상태 변경하는 로직 모음 (할일추가,수정,삭제등..)
4. useReducer() - state(상태)와 dispath(업데이트 함수) 생성
5. TodoProvider - Context를 앱 전체에 공급해주는 컴포넌트( App.jsx에서 <TodoProvider>로 감싸줘야 다른 컴포넌트에서 상태 사용 가능 )
6. useTodos() - 컴포넌트에서 쉽게 Context(todos, dispath)를 꺼내 쓰는 커스텀 훅

# 구현 기능

- 할 일 추가 / 삭제 / 수정 / 완료 체크
- 완료 시 스타일 변경 (취소선 + 색상 변경)
- 상태 전역 관리 (useReducer + Context API)
- localStorage에 자동 저장 및 불러오기
- styled-components로 컴포넌트 스타일링

# 배운 점

- 전역 상태 관리를 직접 구현해봄으로써 상태 흐름 이해
- reducer 패턴에 익숙해졌고, dispatch를 통한 액션 중심 개발 경험
- React 앱에 Context Provider를 적용하는 방식 숙지
- 컴포넌트 간 상태 전달 없이 전역에서 상태 접근이 가능해지는 구조 파악

# + 스타일(styled-components 사용)

- 스타일링은 styled-components 라이브러리를 사용해 컴포넌트 단위로 관리
- 긴 텍스트 말줄임표 처리(...)
- 완료된 투두 스타일링 (줄 긋기 & 색 변경)
- 스크롤바 디자인 변경
- 입력창 자동 포커스
