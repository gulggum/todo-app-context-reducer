import styled from "styled-components";
import { useTodos } from "../context/TodoContext.jsx";
import TodoItem from "./TodoItem.jsx";
import { useEffect, useRef } from "react";

const Ul = styled.ul`
  width: 90%;
  padding-left: 0;
  margin-top: 18px;
  margin: 0 auto;
  max-height: 300px;
  overflow-y: auto;
  padding: 1rem;

  //스크롤바 스타일
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 뒤쪽 배경 투명하게 */
  }
`;
const TodoList = () => {
  const { todos } = useTodos();
  const listRef = useRef(null); //스크롤 DOM참조용 ref

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);
  return (
    <Ul ref={listRef}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Ul>
  );
};

export default TodoList;
