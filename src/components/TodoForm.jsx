import { useState } from "react";
import { useTodos } from "../context/TodoContext.jsx";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { dispatch } = useTodos();

  const onTodoSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() === "") return; //빈값 방지

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput(""); //입력창 초기화
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <input
        type="text"
        placeholder="Please write todo..."
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
