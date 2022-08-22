import React, { Component } from "react";
import { Section } from "./app-style";
import {AddNewTask} from "../new-task-form";
import {Footer} from "../footer";
import {TaskList} from "../task-list";


export const MODE = [
  { id: 1, name: "All", filter: () => true },
  { id: 2, name: "Active", filter: (item) => !item.done },
  { id: 3, name: "Done", filter: (item) => item.done },
];

class App extends Component {
  maxId = 100;

  state = {
    tasksData: [
      { label: "Brush teeth", done: false, id: 2, time: this.randomDate() },
      { label: "Make up", done: false, id: 1, time: this.randomDate() },
      { label: "Have a lunch", done: false, id: 3, time: this.randomDate() },
    ],

    mode: MODE[0],
  };

  randomDate() {
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
  }

  changeTask = (item, callback) => {
    this.setState(
      {
        tasksData: this.state.tasksData.map((task) =>
          task.id === item.id ? item : task
        ),
      },
      () => callback()
    );
  };

  deleteItem = (id) => {
    this.setState({
      tasksData: this.state.tasksData.filter((task) => task.id !== id),
    });
  };

  clearDoneItem = () => {
    this.setState({
      tasksData: this.state.tasksData.filter((task) => task.done === false),
    });
  };

  addItem = (text, callback) => {
    const newItem = {
      label: text,
      done: false,
      id: this.maxId++,
      time: new Date(),
    };
    this.setState({ tasksData: [...this.state.tasksData, newItem] }, () =>
      callback()
    );
  };

  render() {
    return (
      <Section>
        <AddNewTask addItem={this.addItem} />
        <TaskList
          tasks={this.state.tasksData.filter(this.state.mode.filter)}
          onDeleted={this.deleteItem}
          changeTask={this.changeTask}
        />
        <Footer
          setMode={(mode) => this.setState({ mode: mode })}
          mode={this.state.mode}
          doneItemCount={
            this.state.tasksData.filter((item) => !item.done).length
          }
          clearDoneItem={this.clearDoneItem}
        />
      </Section>
    );
  }
}

App.defaultProps = {
  id: 0,
  done: false,
  label: "Do it",
  time: new Date(),
};

export {App};
