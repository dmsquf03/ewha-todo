import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredList = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredList();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">Todo List</h1>
      <input
        className="w-full border rounded p-2 h-7 text-xs"
        placeholder="검색할 todo를 입력해주세요."
        value={search}
        onChange={onChangeSearch}
      />
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        );

      })}
    </div>
  );
};
List.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default List;
