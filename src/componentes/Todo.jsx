function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.titulo}</p>
        <p className="category">({todo.categoria})</p>
        <p>{todo.tempo}h</p>
      </div>
      <div>
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          {todo.completed ? "Desmarcar" : "Completar"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
}

export default Todo;
