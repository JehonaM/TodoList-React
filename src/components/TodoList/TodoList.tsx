import React from "react";
import ToDoItem from "../TodoItem/TodoItem";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";

export type Todo = {
  id: number;
  task: string;
  complete: boolean;
};

interface TodoListProps {
  todos: Todo[];
  onChangeBox: any;
  defaultChecked: boolean;
  onDelete: (id: number) => void;
}

const TodoList = ({
  todos,
  onChangeBox,
  defaultChecked,
  onDelete,
}: TodoListProps) => {
  return (
    <>
      <ul>
        {Array.isArray(todos)
          ? todos.map((todo: Todo) => (
              <div className="t-4 divide-y divide-gray-200 border-b border-t border-white-500">
                <div className="relative flex items-start py-4">
                  <div className="min-w-0 w-4/5 flex-1 text-sm leading-6">
                    <ToDoItem
                      key={todo.id}
                      task={todo.task}
                      complete={todo.complete}
                    ></ToDoItem>
                  </div>
                  <div>
                    <Checkbox
                      key={todo.id}
                      onClick={() => onChangeBox(todo)}
                      defaultChecked={todo.complete}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    ></Checkbox>

                    <Button
                      onClick={() => onDelete(todo.id)}
                      className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </ul>
    </>
  );
};

export default TodoList;
