import { useTodos } from "../context/TodoContext.jsx";

const TodoList = () => {
  const { todos } = useTodos();
  console.log("😍투두리스트", todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          {todo.text}
          <button>수정</button>
          <button>삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
