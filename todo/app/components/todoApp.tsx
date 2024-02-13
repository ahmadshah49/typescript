import React, { useState } from "react";
type propsType = {
  todo: todoType;
  onDeleteHandler: (id: todoType["id"]) => void;
  onEditHandler: (id: todoType["id"], title: todoType["title"]) => void;
};
const TodoApp = ({ todo, onDeleteHandler, onEditHandler }: propsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);
  return (
    <div className="flex items-center p-2 border border-black/20 my-4">
      {editActive ? (
        <input
          type="text"
          value={textVal}
          onChange={(e) => setTextVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && textVal !== "") {
              onEditHandler(todo.id, textVal);
              setEditActive(false);
            }
          }}
        />
      ) : (
        <p>{todo.title}</p>
      )}
      <div className="ml-auto">
        <input type="checkbox" className="mx-2" />
        <button
          onClick={() => {
            setEditActive((prev) => !prev);
            onEditHandler(todo.id, textVal);
          }}
          className="mx-1"
        >
          Edit
        </button>
        <button className="mx-1" onClick={() => onDeleteHandler(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoApp;
