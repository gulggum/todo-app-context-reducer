import { useState } from "react";
import { TodoProvider } from "./context/TodoContext.jsx";
import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 350px;
  height: 500px;
  background-color: orange;
  border-radius: 10px;
  padding: 0.6rem;
  margin-top: 2rem;
`;

function App() {
  return (
    <>
      <TodoProvider>
        <Container>
          <h1>Todo List</h1>
          <TodoForm />
          <TodoList />
        </Container>
      </TodoProvider>
    </>
  );
}

export default App;
