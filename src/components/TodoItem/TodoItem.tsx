import React from "react";

export type ToDoItemProps = {
  id: number;
  task: string;
  complete: boolean;
};

const TodoItem = (props: ToDoItemProps) => {
  return (
    <ol className="list-decimal">
      <li key={props.id}>{props.task}</li>
    </ol>
  );
};

export default TodoItem;
