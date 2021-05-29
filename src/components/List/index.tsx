import { useStateTodos } from "../../context";

function List() {
  const todos = useStateTodos();
  return (
    <div>
      <div>Quantidade: {todos && todos.length}</div>
      <div>
        <ul>
          {todos && todos.map((a, b) => <li key={b}>{a.description}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default List;
