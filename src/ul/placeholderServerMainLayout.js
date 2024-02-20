import styles from "../styles/placeholderServerMainLayout.module.css";

export const PlaceholderServerMainLayout = ({
  searchTodos,
  onSearchTodoChange,
  // todoSearchClick,
  // ============
  sortFlag,
  sortTodoClick,
  // ===============
  sortTodo,
  todos,
  deleteTodo,
  AddTodoClick,
  onTodoChange,
  onTodoUpdateChange,
  addTodoUpdateClick,
}) => {
  return (
    <section className={styles.placeholderContainer}>
      <div className={styles.todosContainer}>
        <ol className={styles.todosTable}>
          {!sortFlag
            ? searchTodos.map(({ title, id }) => (
                <div key={id} id={id} className={styles.todoContent}>
                  <li>
                    <a>{title}</a>
                  </li>
                  <button key={id} id={id} onClick={deleteTodo}>
                    Удалить
                  </button>
                  <button id={id} onClick={addTodoUpdateClick}>
                    Изменить
                  </button>
                  <input onChange={onTodoUpdateChange} id={id}></input>
                </div>
              ))
            : sortTodo.map(({ title, id }, index) => (
                <div key={index} id={id} className={styles.todoContent}>
                  <li>
                    <a>{title}</a>
                  </li>
                  <button key={index} id={id} onClick={deleteTodo}>
                    Удалить
                  </button>
                  <button id={id} onClick={addTodoUpdateClick}>
                    Изменить
                  </button>
                  <input onChange={onTodoUpdateChange} id={id}></input>
                </div>
              ))}
        </ol>
      </div>
      <div>
        <input onChange={onTodoChange}></input>
        <button onClick={AddTodoClick}>ДОБАВИТЬ ЗАДАЧУ</button>
      </div>
      <div>
        <input onChange={onSearchTodoChange}></input>
      </div>
      <div>
        <button onClick={sortTodoClick}>СОРТИРОВКА</button>
      </div>
    </section>
  );
};
