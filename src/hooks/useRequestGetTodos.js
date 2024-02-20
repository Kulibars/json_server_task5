import { useEffect, useState } from "react";
import { TODO_URL } from "../url/jsonServer";

export const useRequestGetTodos = (refreshTodosFlag) => {
  const [todos, setTodos] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(TODO_URL, {
      method: "GET",
    })
      .then((loadedTodos) => loadedTodos.json())
      .then((loadedTodos) => {
        setTodos(loadedTodos);
      })

      .finally(setIsLoading(false));
  }, [refreshTodosFlag]);

  return {
    isLoading,
    todos,
  };
};
