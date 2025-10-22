import { createContext, useContext, useEffect, useReducer } from "react";

//1. Context생성
const TodoContext = createContext();

//2. 초기 상태 (로컬스토리지 추가)
const initialState = JSON.parse(localStorage.getItem("todos")) || [];

//3. reducer함수
const todoReducer = (todos, action) => {
  switch (action.type) {
    case "ADD_TODO": // (어떤 동작을 할지..) 할일추가
      return [
        ...todos, //지금까지 있던 todo 목록을 복사해서 유지
        {
          id: Date.now(),
          text: action.payload, //payload -> 실제 값(input에 사용자가 입력한 텍스트)
          done: false, //완료여부
          isEditing: false,
        },
      ];

    case "DELETE_TODO": //삭제기능
      return todos.filter((todo) => todo.id !== action.payload);

    case "TOGGLE_TODO": //완료기능
      return todos.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case "EDIT_TODO": //수정 기능
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );

    default:
      return todos;
  }
};

// 4. provider 컴포넌트
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  //로컬스토리지 불러오기
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContext.Provider value={{ todos: todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// 5. Context 사용을 위한 커스텀 훅
export const useTodos = () => {
  const context = useContext(TodoContext);
  return context;
};
