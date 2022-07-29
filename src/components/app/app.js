import React, {Component} from "react";
import {Section} from "./app-style";
import Header from "../header";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import addNewTask from "../new-task-form/new-task-form";
import AddNewTask from "../new-task-form/new-task-form";

export const MODE = [
    {id: 1, name: 'All', filter: (item) => true},
    {id: 2, name: 'Active', filter: (item) => !item.done},
    {id: 3, name: 'Done', filter: (item) => item.done},
]

export default class App extends Component {

    maxId = 100;

    state = {
        tasksData: [
            {label: 'Drink Coffee', done: false, id: 1},
            {label: 'Make Awesome App', done: false, id: 2},
            {label: 'Have a lunch', done: false, id: 3},
        ],

        mode: MODE[0]

    }

    changeTask = (item, callback) => {
        this.setState({
            tasksData: this.state.tasksData.map((task) => task.id === item.id ? item : task)
        }, () => callback())

    }

    deleteItem = (id) => {
        this.setState({
            tasksData: this.state.tasksData.filter(task => task.id !== id)
        })

    }

    clearDoneItem = () => {
        this.setState({
            tasksData: this.state.tasksData.filter(task => task.done === false)
        })
    }

    addItem = (text, callback) => {
        const newItem = {
            label: text,
            done: false,
            id: this.maxId++
        };
        this.setState(({tasksData: [...this.state.tasksData, newItem]}), () => callback())
    };

    render() {
        return (
            <Section>
                <AddNewTask addItem={this.addItem}/>
                <TaskList tasks={this.state.tasksData.filter(this.state.mode.filter)}
                          onDeleted={(this.deleteItem)}
                          changeTask={(this.changeTask)}
                />
                <Footer setMode={(mode) => this.setState({mode: mode})}
                        mode={this.state.mode}
                        doneItemCount={this.state.tasksData.filter((item) => !item.done).length}
                        clearDoneItem={this.clearDoneItem}
                />
            </Section>
        );
    }


}
