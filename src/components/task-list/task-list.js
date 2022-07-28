import React from "react";
import Task from "../task/task";
import {Li, Ul, Section} from "./task-list-style";


const TaskList = ({tasks, onDeleted, changeTask}) => {
    const elements = tasks.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <Li key={item.id}>
                <Task {...itemProps} id={id}
                     onDeleted={() => onDeleted(item.id)}
                     changeTask={(item,callback) => changeTask(item,callback)}
                />
            </Li>
        );
    });

    return (
        <Section>
            <Ul>
                {elements}
            </Ul>
        </Section>
    );
};

export default TaskList