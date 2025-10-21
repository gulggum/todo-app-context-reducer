import { useTodos } from "../context/TodoContext.jsx";
import TodoItem from "./TodoItem.jsx";
const TodoList = () => {
  const { todos } = useTodos();
  console.log("😍투두리스트", todos);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
