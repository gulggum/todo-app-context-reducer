import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";
import styled from "styled-components";

const DoneLiStyle = styled.li`
  color: ${({ $done }) => ($done ? "#aaa" : "#000")};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const onDelete = () => {
    console.log("삭제할ID😣", todo.id);
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });
  };

  const onTodoToggle = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id,
    });
    console.log("완료!:", todo.id);
  };
  const onEdit = () => {
    setIsEditing(true);
  };

  const onEditChange = (e) => {
    setEditText(e.target.value);
  };
  const onEditSubmit = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id: todo.id, text: editText },
    });
    setIsEditing(false);
  };
  return (
    <>
      <DoneLiStyle $done={todo.done}>
        {isEditing ? (
          <>
            <input
              value={editText}
              onChange={onEditChange}
              placeholder={todo.text}
            ></input>
            <button onClick={onEditSubmit}>저장</button>
          </>
        ) : (
          <>
            {todo.text}
            <button onClick={onEdit}>수정</button>
            <button onClick={onDelete}>삭제</button>
            <button onClick={onTodoToggle}>완료</button>
          </>
        )}
      </DoneLiStyle>
    </>
  );
};

export default TodoItem;
