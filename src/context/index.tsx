import React, { createContext, useContext, useState } from "react";

export interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

interface IContext {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export interface IChildren {
  children: React.ReactNode;
}

var GlobalContext = createContext<IContext>({} as IContext);

function GlobalProvider({ children }: IChildren) {
  const [todos, setTodos] = useState<ITodo[]>([]);
  return (
    <GlobalContext.Provider value={{ todos, setTodos }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useStateTodos() {
  const { todos } = useContext(GlobalContext);
  return todos;
}

export function useSetTodos() {
  const { setTodos } = useContext(GlobalContext);
  return setTodos;
}

export default GlobalProvider;
