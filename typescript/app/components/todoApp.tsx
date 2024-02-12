import { todoItemType } from "../utils";

type propsType = {
  todo: todoItemType;
  deleteHandler: (id: todoItemType["id"]) => void;
  completeHandler: (id: todoItemType["id"]) => void;
};
const TodoApp = ({ todo, deleteHandler, completeHandler }: propsType) => {
  return (
    <div>
      <div className=" flex justify-between border border-black/20 py-4 my-8  px-2">
        <p>{todo.title}</p>
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />
          <button>Edit</button>
          <button onClick={() => deleteHandler(todo.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
