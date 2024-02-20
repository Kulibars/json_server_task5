import { TODO_URL } from "../url/jsonServer";

export const useRequestDeleteTodos = (refreshTodos) => {
  const deleteTodo = ({ target }) => {
    fetch(`${TODO_URL}/${target.id}`, {
      method: "DELETE",
    })
      .then((loadedTodos) => {
        loadedTodos.json();
      })
      .then(() => {
        refreshTodos();
      })
      .finally(console.log(target.id));
  };
  return {
    deleteTodo,
  };
};
