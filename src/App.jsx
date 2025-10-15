import { useState } from "react";
import "./App.css";
import Todo from "./componentes/Todo";
import TodoForm from "./componentes/TodoForm";
import Busca from "./componentes/Busca";
import Filtro from "./componentes/Filtro";

function App() {
  //Constantes abaixo

  const [todos, setTodos] = useState([]); // Armazenamento de dados, usando o "useState" pois assim é possivel a manipulação e gerenciamentos de dados

  const [busca, setBusca] = useState("");

  const [filter, setFilter] = useState("All");

  const [sort, setSort] = useState("Asc");

  //Funções abaixo

  function addTodo(text, category, tempo) {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000), // formala para o id continuar ate o numro 10000
        text,
        category,
        tempo,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  }

  function removeTodo(id) {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  function completeTodo(id) {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Busca busca={busca} setBusca={setBusca} />
      <Filtro filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        <div className="todo-vazio">
          {todos.length === 0 && <p>Lista vazia!</p>}
        </div>
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(busca.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
