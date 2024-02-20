import { useState, useEffect } from "react";

export const useSortTodos = (searchTodos, todos) => {
  const [sortTodo, setSortTodo] = useState([]);
  useEffect(() => {
    setSortTodo(
      [...searchTodos].sort((a, b) =>
        a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
      )
    );
    console.log(sortTodo);
  }, [searchTodos, todos]);

  return { sortTodo };
};
