import { useState } from "react";
import { TodoProvider } from "./context/TodoContext.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  return (
    <>
      <TodoProvider>
        <div>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
