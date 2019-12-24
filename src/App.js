import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoHead from './components/ToDoHead';
import TodoList from './components/ToDoList';
import ToDoCreate from './components/ToDoCreate';
import { TodoProvider } from './ToDoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <ToDoTemplate>
        <ToDoHead />
        <TodoList />
        <ToDoCreate />
      </ToDoTemplate>
    </TodoProvider>
  );
}

export default App;
