import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{textAlign: "center"}}>
      <h1 style={{color: "#008a81"}}>Todo App</h1>
      <h2>Made by Pius Osuji</h2>
    <div className="todo-app">
      <TodoList />
    </div>
    </div>
  );
}

export default App;
