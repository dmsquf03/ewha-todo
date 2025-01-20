import TodoItem from "./TodoItem";
import { useContext, useState } from "react";
import { TodoContext } from "../App";

const List = () => {
  const { todos } = useContext(TodoContext);
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
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

export default List;
