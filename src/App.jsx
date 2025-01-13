import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";
import { getDate } from "./utils/getDate";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    date: getDate(new Date()),
  },
  {
    id: 1,
    isDone: false,
    content: "놀기",
    date: getDate(new Date()),
  },
  {
    id: 2,
    isDone: false,
    content: "누워있기",
    date: getDate(new Date()),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newData = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: getDate(new Date()),
    };
    setTodos([newData, ...todos]);
  };

  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id != targetId));
  };

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className="flex flex-col gap-10 w-96 mx-auto my-0 font-sans">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
