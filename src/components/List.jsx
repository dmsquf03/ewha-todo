import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { useDebugValue, useState } from "react";

<<<<<<< HEAD
const List = ({ todos, onUpdate }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const getFilteredList = () => {
    if (search === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredList();
=======
const List = ({ todos }) => {
  console.log(todos);

>>>>>>> a90178a7815848d2277564306d27d9f29f82fb43
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
        return <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />;
      })}
    </div>
  );
};
List.propTypes = {
  todos: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default List;
