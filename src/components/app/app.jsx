import React, { useState } from "react";
import { Section } from "./app-style";
import { AddNewTask } from "../new-task-form";
import { Footer } from "../footer";
import { TaskList } from "../task-list";
import { Context } from "../context/Context";


export const MODE = [
  { id: 1, name: "All", filter: () => true },
  { id: 2, name: "Active", filter: (item) => !item.done },
  { id: 3, name: "Done", filter: (item) => item.done }
];

const App = () => {
  const randomDate = () => {
    let start = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay(),
      new Date().getHours()
    );

    let end = new Date();
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
  };
  const [tasksData, setTasksData] = useState([
    { label: "Brush teeth", done: false, id: 2, time: randomDate() },
    { label: "Make up", done: false, id: 1, time: randomDate() },
    { label: "Have a lunch", done: false, id: 3, time: randomDate() }
  ]);
  const [mode, setMode] = useState(MODE[0]);


  const changeTask = (item, callback) => {
    setTasksData(tasksData.map((task) =>
      task.id === item.id ? item : task
    ));
    callback();
  };

  const deleteItem = (id) => {
    setTasksData(tasksData.filter((task) => task.id !== id));
  };

  const clearDoneItem = () => {
    setTasksData(tasksData.filter((task) => task.done === false));
  };

  const addItem = (text, callback) => {
    const newItem = {
      label: text,
      done: false,
      id: new Date().getTime(),
      time: new Date()
    };

    setTasksData([...tasksData, newItem]);
    callback();
  };


  return (
    <Context.Provider value={{
      addItem,
      clearDoneItem,
      setMode,
      deleteItem,
      changeTask
    }}>
      <Section>
        <AddNewTask />
        <TaskList
          tasks={tasksData.filter(mode.filter)}
        />
        <Footer
          mode={mode}
          doneItemCount={tasksData.filter((item) => !item.done).length}
        />
      </Section>
    </Context.Provider>
  );
};

App.defaultProps = {
  id: 0,
  done: false,
  label: "Do it",
  time: new Date()
};

export { App };
