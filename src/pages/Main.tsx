import React, { useEffect, useState } from "react";
import InputFiled from "../components/InputField/InputFiled";
import Button from "../components/Button/Button";
import TodoList from "../components/TodoList/TodoList";
import { isTemplateTail } from "typescript";

interface Task {
  id: number;
  task: string;
  complete: boolean;
}

const Main = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const [defaultChecked, setDefaultChecked] = useState(false);

  const [taskList, setTaskList] = useState<Task[]>(() => {
    const savedtaskList = localStorage.getItem("taskList");
    if (savedtaskList) {
      return JSON.parse(savedtaskList);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const onInputChange = (event: any) => {
    setError("");
    setTask(event.target.value);
  };

  const onChangeBox = (item: any) => {
    setTaskList(
      taskList.map((el) =>
        el.id === item.id ? { ...el, complete: !el.complete } : el
      )
    );
    setDefaultChecked(item.complete);
  };

  const onBlur = () => {};

  const addNewTask = () => {
    const id = taskList.length + 1;
    if (task !== "") {
      setTaskList((prev) => [
        ...prev,
        {
          id: id,
          task: task,
          complete: defaultChecked,
        },
      ]);
      setError("");
    } else {
      setError("Please add a task!");
    }
    setTask("");

    console.log(taskList);
  };

  const handleDelete = (id: number) => {
    alert("here");
    const updateTaskList = taskList.filter((todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(updateTaskList));
    setTaskList(updateTaskList);
  };

  return (
    <div className="h-full">
      <div>
        <h1 className="my-4 text-4xl italic font-extrabold leading-none tracking-tight text-center text-slate-400 md:text-5xl lg:text-6xl dark:text-white">
          My Todo list
        </h1>
        <div className="w-1/2 m-auto border-2  border-slate-400 px-10 py-10 mt-10">
          <div className="flex items-center">
            <InputFiled
              name={"todo"}
              value={task}
              type={"text"}
              placeholder={"New todo"}
              label={""}
              className={"w-full p-2 border border-gray-300 rounded"}
              required
              onChange={onInputChange}
              onBlur={onBlur}
              error={error}
            />

            <Button
              onClick={addNewTask}
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </Button>
          </div>
          <div className="mb-12">
            {error && <div style={{ color: "red" }}>Plase add a task!</div>}
          </div>
          <TodoList
            todos={taskList}
            onChangeBox={onChangeBox}
            defaultChecked={defaultChecked}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
