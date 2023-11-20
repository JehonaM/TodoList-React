import React from "react";
import ToDoItem from "../TodoItem/TodoItem";

export type Todo = {
  id: number;
  task: string;
  complete: boolean;
};

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      <ul>
        {Array.isArray(todos)
          ? todos.map((todo: Todo) => (
              <div>
                <li key={todo.id}>{todo.task}</li>
              </div>
            ))
          : null}
      </ul>
    </>
  );
};

export default TodoList;
