import { useState } from "react";

function App() {
  return (
    <>
      <div>
        <h1>Todo List</h1>

        <form>
          <input type="text" placeholder="Please write todo..." />
          <button type="submit">입력</button>
        </form>
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
