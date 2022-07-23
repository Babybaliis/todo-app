import React from "react";
import {Section} from "./app-style";
import Header from "../header";
import TaskList from "../task-list/task-list";


const App = () => {
    const tasksData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make Awesome App', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
    ]
    return (
        <Section>
            <Header/>
            <TaskList tasks={tasksData}/>
            {/*<Footer/>*/}
        </Section>
    );
};


export default App;