import { useTodos } from "../context/TodoContext.jsx";
import styled from "styled-components";

const DoneLiStyle = styled.li`
  color: ${({ $done }) => ($done ? "#aaa" : "#000")};
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodos();

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
  return (
    <DoneLiStyle $done={todo.done}>
      {todo.text}
      <button>수정</button>
      <button onClick={onDelete}>삭제</button>
      <button onClick={onTodoToggle}>완료</button>
    </DoneLiStyle>
  );
};

export default TodoItem;
