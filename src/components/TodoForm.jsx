import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 18px;
`;
const Input = styled.input`
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin-right: 5px;
`;
const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 6px;
  background-color: #f0f0f0;
  color: black;
  font-weight: 500;
  cursor: pointer;
`;

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useTodos();

  const onTodoSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("텍스트를 입력해주세요.");
      return;
    } //빈값 방지

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput(""); //입력창 초기화
  };

  return (
    <Form onSubmit={onTodoSubmit}>
      <Input
        type="text"
        placeholder="Please write todo..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
        autoFocus
      />
      <Button type="submit">추가</Button>
    </Form>
  );
};

export default TodoForm;
