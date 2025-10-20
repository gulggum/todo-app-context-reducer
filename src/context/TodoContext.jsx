import { createContext } from "react";

//1. Context생성
const TodoContext = createContext();

//2. 초기 상태
const initialState = [];

//3. reducer함수
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": // 어떤 동작을 할지..
      return [
        ...state, //지금까지 있던 todo 목록을 복사해서 유지
        {
          id: Date.now(),
          text: action.payload, //payload -> 실제 값(input에 사용자가 입력한 텍스트)
          done: false, //완료여부
        },
      ];
    default:
      return state;
  }
};
