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
    setTask(event.target.value);
  };

  const onChangeBox = (item: any) => {
    setTaskList(
      taskList.map((el) =>
        el.id === item.id ? { ...el, complete: !el.complete } : el
      )
    );
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
          complete: false,
        },
      ]);
      setError("");
    } else {
      setError("Please add a task!");
    }
    setTask("");

    console.log(taskList);
  };

  return (
    <div className="h-full">
      <div>
        <h1 className="my-4 text-4xl italic font-extrabold leading-none tracking-tight text-center text-slate-400 md:text-5xl lg:text-6xl dark:text-white">
          My Todo list
        </h1>
        <div className="w-1/2 m-auto border-2  border-slate-400 px-10 py-10 mt-10">
          <div className="flex mb-12">
            <div className="base-1 w-4/5">
              <InputFiled
                name={"todo"}
                value={task}
                type={"text"}
                placeholder={"New todo"}
                label={""}
                className={"w-fill"}
                required
                onChange={onInputChange}
                onBlur={onBlur}
                error={error}
              />
            </div>
            <div className="base-1 w-1/5">
              <Button label={"Add"} onClick={addNewTask} />
            </div>
          </div>
          <TodoList todos={taskList} onChangeBox={onChangeBox} />
        </div>
      </div>
    </div>
  );
};

export default Main;
