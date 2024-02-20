import { PlaceholderServerMainLayout } from "../ul/placeholderServerMainLayout";
import { useState, useEffect } from "react";
import {
  useSearchTodos,
  useSortTodos,
  useRequestUpdateTodo,
  useRequestGetTodos,
  useRequestDeleteTodos,
  useRequestAddTodos,
} from "../hooks";

export const PlaceholderServerMain = () => {
  const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState(false);

  const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);
  const sortTodoClick = () => setSortFlag(!sortFlag);

  const { isLoading, todos } = useRequestGetTodos(refreshTodosFlag);

  const { onTodoChange, AddTodoClick } = useRequestAddTodos(refreshTodos);
  const { onTodoUpdateChange, addTodoUpdateClick } =
    useRequestUpdateTodo(refreshTodos);
  const { deleteTodo } = useRequestDeleteTodos(refreshTodos);
  const { searchTodos, onSearchTodoChange } = useSearchTodos(todos);
  const { sortTodo } = useSortTodos(searchTodos, todos);

  return (
    <PlaceholderServerMainLayout
      onSearchTodoChange={onSearchTodoChange}
      sortTodoClick={sortTodoClick}
      sortFlag={sortFlag}
      addTodoUpdateClick={addTodoUpdateClick}
      onTodoUpdateChange={onTodoUpdateChange}
      onTodoChange={onTodoChange}
      AddTodoClick={AddTodoClick}
      deleteTodo={deleteTodo}
      sortTodo={sortTodo}
      searchTodos={searchTodos}
    />
  );
};
