import React, {Component} from "react";
import {ButtonDestroy, ButtonEdit, Input, Label, TaskItemDiv} from "./task-style";
import "../../style.css"

export default class Task extends Component{
    state = {
        done: this.props.done,
        label: this.props.label,
        id: this.props.id,
    }


    onChangeCheckBox=(event) =>{
        let newItem = {...this.state}
        newItem.done=!this.state.done
        this.props.changeTask(newItem,()=> this.setState({done: !this.state.done}))
    }


    render () {
        const {label,onDeleted } = this.props;
        const {done} = this.state;

        return (
            <TaskItemDiv done={done}  children={
                <>
                    <Input  type="checkbox" checked={done}
                            onChange={this.onChangeCheckBox}/>
                    <Label>
                        <span className="description"> {label}</span>
                        {/*<span className="created">created 17 seconds ago</span>*/}
                    </Label>

                    <ButtonEdit/>
                    <ButtonDestroy onClick={onDeleted}/>
                </>
            }/>
        )
    }
}
// const Task = ({label, important = false, id}) => {
