import React, { useEffect, useState } from "react";
import InputFiled from "../components/InputField/InputFiled";
import Button from "../components/Button/Button";
import TodoList from "../components/TodoList/TodoList";

interface Task {
  id: number;
  task: string;
  complete: boolean;
}

const Main = () => {
  const [task, setTask] = useState("");
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

  const addNewTask = () => {
    const id = taskList.length + 1;
    setTaskList((prev) => [
      ...prev,
      {
        id: id,
        task: task,
        complete: false,
      },
    ]);
    setTask("");
    console.log(taskList);
  };

  return (
    <div className="h-full">
      <div>
        <h1 className="my-4 text-4xl italic font-extrabold leading-none tracking-tight text-center text-slate-400 md:text-5xl lg:text-6xl dark:text-white">
          My Todo list
        </h1>
        <div className="w-1/2 m-auto border-2 border-slate-400 px-10 py-10 mt-10">
          <div className="flex">
            <div className="base-1 w-4/5">
              <InputFiled
                value={task}
                name={"todo"}
                type={"text"}
                placeholder={"New todo"}
                label={""}
                className={"w-fill"}
                onChange={onInputChange}
              />
            </div>
            <div className="base-1 w-1/5">
              <Button label={"Add"} onClick={addNewTask} />
            </div>
          </div>
          <TodoList todos={taskList} />
        </div>
      </div>
    </div>
  );
};

export default Main;
