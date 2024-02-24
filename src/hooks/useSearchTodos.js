import { useState, useEffect } from "react";

export const useSearchTodos = (todos) => {
  const [searchTodos, setSearchTodos] = useState(todos);
  const [searchTodoEl, setSearchTodoEl] = useState("");

  const onSearchTodoChange = ({ target }) => {
    setSearchTodoEl(target.value);
  };
  useEffect(() => {
    if (searchTodoEl === "") {
      setSearchTodos(todos);
    } else {
      setSearchTodos(
        todos.filter(({ id, title }) => {
          return title.toLowerCase().indexOf(searchTodoEl.toLowerCase()) !== -1;
        })
      );
    }
  }, [searchTodoEl, todos]);

  return { searchTodos, onSearchTodoChange };
};
