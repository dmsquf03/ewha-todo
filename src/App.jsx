import { useState } from "react";
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
  const [todos, SetTodos] = useState(mockData);
  console.log(todos);
  return (
    <div className="flex flex-col gap-10 w-96 mx-auto my-0 font-sans">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
