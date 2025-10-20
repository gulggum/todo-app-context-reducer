import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";

function App() {
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <ul>
          <li>
            <span>리액트 공부하기</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
          <li>
            <span>운동하기</span>
            <button>수정</button>
            <button>삭제</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
