import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [tempo, setTempo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !tempo) return;

    addTodo(value, category, tempo);

    setValue("");
    setCategory("");
    setTempo("");
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="ESTUDOS">Estudo</option>
          <option value="TRABALHO">Trabalho</option>
          <option value="LAZER">Lazer</option>
        </select>

        <input
          type="number"
          value={tempo}
          placeholder="Tempo estimado (em horas)"
          onChange={(e) => setTempo(e.target.value)}
        />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
}

export default TodoForm;
