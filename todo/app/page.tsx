"use client";
import { useState } from "react";
import TodoApp from "./components/todoApp";

export default function Home() {
  const [todo, setTodo] = useState<todoType[]>([]);
  const [title, setTitle] = useState<todoType["title"]>("");
  const onDeleteHandler = (id: todoType["id"]): void => {
    const newTodo: todoType[] = todo.filter((i) => i.id !== id);
    setTodo(newTodo);
  };
  const onEditHandler = (
    id: todoType["id"],
    title: todoType["title"]
  ): void => {
    const newTodo: todoType[] = todo.map((i) => {
      if (i.id === id) i.title = title;
      return i;
    });
  };
  const submitHandler = () => {
    const newTodo: todoType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 14574557.5343),
    };
    setTodo((prev) => [...prev, newTodo]);
    setTitle("");
  };
  return (
    <div className="w-full h-[100vh]">
      <h1 className="text-center text-2xl font-bold my-2">Todo App</h1>
      <div className="w-[400px] p-4 h-[80%] bg-blue-200 overflow-auto mx-auto">
        {todo.map((i) => (
          <TodoApp
            key={i.id}
            todo={i}
            onDeleteHandler={onDeleteHandler}
            onEditHandler={onEditHandler}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Write Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && title !== "") submitHandler();
          }}
          className="w-[400px] mx-auto my-4 p-2 border border-black/20 outline-none focus:border-black"
        />
        <button
          onClick={submitHandler}
          className="w-[400px] bg-blue-200 mx-auto py-2 font-bold"
          disabled={title === ""}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
