import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";
import styled from "styled-components";

const Li = styled.li`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  border-bottom: dotted;
  border-color: wheat;
  color: ${({ $done }) => ($done ? "#aaa" : "#000")};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
const Button = styled.button`
  font-size: 0.7rem;
  border: none;
  border-radius: 5px;
  margin-right: 3px;
  cursor: pointer;
  padding: 5px 6px;
  -webkit-appearance: none;
`;
const Span = styled.span`
  max-width: 200px;
  margin-right: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EditForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const InputEdit = styled.input`
  width: 84%;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
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
      <Li $done={todo.done}>
        {isEditing ? (
          <>
            <EditForm>
              <InputEdit
                value={editText}
                onChange={onEditChange}
                placeholder={todo.text}
                autoFocus
              ></InputEdit>
              <Button onClick={onEditSubmit}>저장</Button>
            </EditForm>
          </>
        ) : (
          <>
            <Span>{todo.text}</Span>
            <div>
              <Button onClick={onEdit}>수정</Button>
              <Button onClick={onDelete}>삭제</Button>
              <Button onClick={onTodoToggle}>완료</Button>
            </div>
          </>
        )}
      </Li>
    </>
  );
};

export default TodoItem;
