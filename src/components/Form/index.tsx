import { useRef, useState } from "react";
import { useSetTodos } from "../../context";

function Form() {
  const descriptionRef = useRef<HTMLInputElement | null>(null);
  const [description, setDescription] = useState<string>("");
  const setTodos = useSetTodos();
  function onFormSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setTodos((state) => [
      ...state,
      { id: 1, description: description, done: false },
    ]);
    setDescription("");
    if (descriptionRef) {
      descriptionRef.current?.focus();
    }
  }
  return (
    <form onSubmit={onFormSubmit}>
      <div className="mb-3 mt-3">
        <label htmlFor="desc1" className="form-label">
          Descrição:
        </label>
        <input
          ref={descriptionRef}
          type="text"
          name="description"
          className="form-control"
          id="desc1"
          placeholder="descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </div>
    </form>
  );
}

export default Form;
