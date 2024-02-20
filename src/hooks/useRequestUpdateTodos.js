import { useState } from "react";
import { TODO_URL } from "../url/jsonServer";

export const useRequestUpdateTodo = (refreshTodos) => {
  const [updateTodo, setUpdateTodo] = useState("");
  const onTodoUpdateChange = ({ target }) => {
    setUpdateTodo(target.value);
  };

  const addTodoUpdateClick = ({ target }) => {
    fetch(`${TODO_URL}/${target.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: target.id,
        title: updateTodo,
      }),
    })
      .then((rawResponse) => {
        rawResponse.json();
      })
      .then(() => {
        refreshTodos();
      })
      .finally();
  };

  return { onTodoUpdateChange, addTodoUpdateClick };
};
