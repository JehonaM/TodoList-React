import React from "react";
import ToDoItem from "../TodoItem/TodoItem";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import styled from "styled-components";
import { Task } from "../../models/task-model";

interface TodoListProps {
  todos: Task[];
  onChangeBox: (item: Task) => void;
  defaultChecked: boolean;
  onDelete: (id: number) => void;
}

const TodoListWrapper = styled.div`
  text-transform: capitalize;
  font-size: 16px;
`;

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
          ? todos.map((todo: Task) => (
              <div className="t-4 divide-y divide-white-500 border-b border-t border-white-500 mb-5">
                <div className="relative flex items-center py-4">
                  <Checkbox
                    key={todo.id}
                    onClick={() => onChangeBox(todo)}
                    defaultChecked={todo.complete}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 mr-12 "
                  ></Checkbox>
                  <div className="min-w-0 flex-1 text-sm leading-6">
                    <TodoListWrapper>
                      <ToDoItem
                        key={todo.id}
                        task={todo.task}
                        complete={todo.complete}
                      ></ToDoItem>
                    </TodoListWrapper>
                  </div>
                  <div className="ml-3 flex h-6 items-center">
                    <Button
                      onClick={() => onDelete(todo.id)}
                      className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded ml-8"
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
