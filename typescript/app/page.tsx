"use client";
import { useState } from "react";
import TodoApp from "./components/todoApp";
import { todoItemType } from "./utils";

const page = () => {
  const [todos, setTodos] = useState<todoItemType[]>([]);
  const [title, setTitle] = useState<todoItemType["title"]>("");
  const completeHandler = (id: todoItemType["id"]): void => {
    const newtodos: todoItemType[] = todos.map((i) => {
      if (i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    });
    setTodos(newtodos);
  };
  const deleteHandler = (id: todoItemType["id"]): void => {
    const newtodo: todoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(newtodo);
  };
  const submitHandler = () => {
    const newTodo: todoItemType = {
      title,
      isCompleted: false,
      id: String(Math.random() * 155455),
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };
  return (
    <div className="h-[100vh] w-full  flex  items-center flex-col py-8">
      <h1 className="text-4xl font-bold"> Todo App</h1>
      <div className="h-[80%] w-[500px] bg-slate-200 my-4 p-4 overflow-auto ">
        {todos.map((i) => (
          <TodoApp
            key={i.id}
            todo={i}
            deleteHandler={deleteHandler}
            completeHandler={completeHandler}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && title !== "") submitHandler();
          }}
          placeholder="Write Todo"
          className="w-[500px] p-2 outline-none border-black border"
        />
        <button
          onClick={submitHandler}
          className="my-4 font-bold bg-slate-400 py-2"
          disabled={title === ""}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default page;
