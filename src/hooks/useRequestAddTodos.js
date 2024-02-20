import { useState } from "react";
import { TODO_URL } from "../url/jsonServer";

export const useRequestAddTodos = (refreshProducts) => {
  const [addTodo, setAddTodo] = useState("");
  const onTodoChange = ({ target }) => {
    setAddTodo(target.value);
  };

  const AddTodoClick = () => {
    const dateID = String(new Date().getTime());
    fetch(TODO_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        id: dateID,
        title: addTodo,
      }),
    })
      .then((rawResponse) => {
        rawResponse.json();
      })
      .then(() => {
        refreshProducts();
      })
      .finally();
  };

  return { onTodoChange, AddTodoClick };
};
