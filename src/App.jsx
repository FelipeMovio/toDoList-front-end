import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Todo from "./componentes/Todo";
import TodoForm from "./componentes/TodoForm";
import Busca from "./componentes/Busca";
import Filtro from "./componentes/Filtro";

function App() {
  const [todos, setTodos] = useState([]);
  const [busca, setBusca] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const API_URL = "http://localhost:8080/api/forms";

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  const addTodo = async (titulo, categoria, tempo) => {
    try {
      const novaTarefa = {
        titulo,
        categoria,
        tempo: Number(tempo),
        completed: false,
      };

      console.log("Enviando para backend:", novaTarefa); // 👈 debug

      const response = await axios.post(API_URL, novaTarefa);
      setTodos((prev) => [...prev, response.data]);
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
      if (error.response) {
        console.error("Erro do backend:", error.response.data); // 👈 mostra o erro do backend
      }
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Erro ao deletar tarefa:", error);
    }
  };

  const completeTodo = async (id) => {
    try {
      // 1. Busca a tarefa pelo ID
      const tarefa = todos.find((t) => t.id === id);
      if (!tarefa) return;

      // 2. Cria objeto atualizado (inverte completed)
      const atualizada = {
        ...tarefa,
        completed: !tarefa.completed,
      };

      // 3. Envia a tarefa atualizada para o backend (PUT)
      const response = await axios.put(
        `http://localhost:8080/api/forms/${id}`,
        atualizada
      );

      // 4. Substitui a tarefa no estado pela versão atualizada do backend
      const nova = response.data;

      setTodos((prev) => prev.map((t) => (t.id === id ? nova : t)));
    } catch (error) {
      console.error("Erro ao completar tarefa:", error);
      if (error.response) {
        console.error("Resposta do backend:", error.response.data);
      }
    }
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Busca busca={busca} setBusca={setBusca} />
      <Filtro filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todos.length === 0 && <p>Lista vazia!</p>}
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.completed
              : !todo.completed
          )
          .filter((todo) =>
            todo.titulo.toLowerCase().includes(busca.toLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.titulo.localeCompare(b.titulo)
              : b.titulo.localeCompare(a.titulo)
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
