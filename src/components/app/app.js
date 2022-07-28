import React, {Component} from "react";
import {Section} from "./app-style";
import Header from "../header";
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";

export const MODE = [
    {id: 1, name: 'All', filter: (item) => true},
    {id: 2, name: 'Active', filter: (item) => !item.done},
    {id: 3, name: 'Done', filter: (item) => item.done},
]

export default class App extends Component {

    state = {
        tasksData: [
            {label: 'Drink Coffee', done: false, id: 1},
            {label: 'Make Awesome App', done: false, id: 2},
            {label: 'Have a lunch', done: false, id: 3},
        ],

        mode: MODE[0]

    }

    changeTask = (item,callback) => {
        console.log(item)
        console.log(this.state.tasksData.map((task) => task.id === item.id ? item : task))
        this.setState({
            tasksData: this.state.tasksData.map((task) => task.id === item.id ? item : task)
        },()=>callback())

    }

    deleteItem = (id) => {
        this.setState({
            tasksData: this.state.tasksData.filter(task => task.id !== id)
        })

    }


    render() {
        return (
            <Section>
                <Header/>
                <TaskList tasks={this.state.tasksData.filter(this.state.mode.filter)}
                          onDeleted={(this.deleteItem)}
                          changeTask={(this.changeTask)}
                />
                <Footer setMode={(mode) => this.setState({mode: mode})} mode={this.state.mode}/>
            </Section>
        );
    }


}
