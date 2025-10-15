import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [tempo, setTempo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category || !tempo) return;
    addTodo(value, category, tempo);
    console.log(value, category, tempo);
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
          placeholder="Digite o titulo"
          onChange={(e) => setValue(e.target.value)} //resumindo está colocando o valor do input na variavel
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          // e = evento , target = é o input, value = valor
          <option>Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudo">Estudo</option>
        </select>
        <input
          type="text"
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
