import { useState } from "react";

const TodoForm = () => {
  const [text, setText] = useState("");

  const onTodoSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    console.log(text);
    setText("");
  };

  return (
    <form onSubmit={onTodoSubmit}>
      <input
        type="text"
        placeholder="Please write todo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
