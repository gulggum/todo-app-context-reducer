import { useTodos } from "../context/TodoContext.jsx";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();

  const onDelete = () => {
    console.log("삭제할ID😣", todo.id);

    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };

  const onTodoDone = () => {};
  return (
    <li>
      {todo.text}
      <button>수정</button>
      <button onClick={onDelete}>삭제</button>
      <button onClick={onTodoDone}>완료</button>
    </li>
  );
};

export default TodoItem;
