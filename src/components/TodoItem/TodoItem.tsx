import React from "react";
import Checkbox from "../Checkbox/Checkbox";

export type ToDoItemProps = {
  key: number;
  task: string;
  complete: boolean;
};

const TodoItem = (props: ToDoItemProps) => {
  return (
    <li
      key={props.key}
      style={{ textDecoration: props.complete ? "line-through" : "" }}
    >
      {props.task}
    </li>
  );
};

export default TodoItem;
