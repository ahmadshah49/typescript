import { useState } from "react";
import { todoItemType } from "../utils";

type propsType = {
  todo: todoItemType;
  deleteHandler: (id: todoItemType["id"]) => void;
  completeHandler: (id: todoItemType["id"]) => void;
  editHandler: (id: todoItemType["id"], title: todoItemType["title"]) => void;
};
const TodoApp = ({
  todo,
  deleteHandler,
  completeHandler,
  editHandler,
}: propsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<string>(todo.title);
  return (
    <div>
      <div className=" flex justify-between border border-black/20 py-4 my-8  px-2">
        {editActive ? (
          <input
            type="text"
            className="w-full py-2 px-2 outline-none mx-2"
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && textVal !== "") {
                editHandler(todo.id, textVal);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <p className="w-full py-2 px-2  mx-2">{todo.title}</p>
        )}
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />
          <button onClick={() => setEditActive((prev) => !prev)}>Edit</button>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
