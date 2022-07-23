import React from "react";
import {ButtonDestroy, ButtonEdit, Input, Label, TaskItemDiv} from "./task-style";
import "../../style.css"


const Task = ({label, important = false, id}) => {
    return (
        <TaskItemDiv important={important} children={
            <>
                <Input  type="checkbox"/>
                <Label>
                    <span className="description"> {label}</span>
                    {/*<span className="created">created 17 seconds ago</span>*/}
                </Label>

                <ButtonEdit/>
                <ButtonDestroy />
            </>
        }/>
    )
};

export default Task;