import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import ToDoTask from "./components/ToDoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadLine] = useState<number>(0);
  const [toDoList, setToDoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadLine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadLine: deadline };
    setToDoList([...toDoList, newTask]);
    console.log(toDoList);
    setTask("")
    setDeadLine(0)
  };

  const completeTask = (taskNameToDelete: string):void => {
    setToDoList(toDoList.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))

  }

  return (
    <div className="App">
      <header>
        Simple To Do List
      </header>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            value={task}
            name="task"
            id=""
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Deadline (in Days)..."
            value={deadline}
            name="deadline"
            id=""
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todolist">
        {toDoList.map((task: ITask, key:number) => {
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
};

export default App;
