const TodoItem = ({ todo }) => {
  return (
    <li>
      {todo.text}
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
