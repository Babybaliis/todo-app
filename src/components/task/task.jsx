import React, { Component } from "react";
import {
  ButtonDestroy,
  ButtonEdit,
  Input,
  Label,
  TaskItemDiv,
  SpanTime,
  SpanLabel,
} from "./task-style";
import "../../style.css";
import { formatDistanceToNow } from "date-fns";

class Task extends Component {
  state = {
    done: this.props.done,
    label: this.props.label,
    id: this.props.id,
    time: this.props.time,
    canEdit: false,
  };

  onChangeCheckBox = (event) => {
    let newItem = { ...this.state };
    newItem.done = !this.state.done;
    this.props.changeTask(newItem, () =>
      this.setState({ done: !this.state.done })
    );
  };
  onSubmit = (event) => {
    event.preventDefault();
    let newItem = { ...this.state };
    newItem.label = this.state.label;
    this.props.changeTask(newItem, () =>
      this.setState({ canEdit: !this.state.canEdit })
    );
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <TaskItemDiv
          done={done}
          children={
            <>
              <Input
                type="checkbox"
                checked={done}
                onChange={this.onChangeCheckBox}
              />
              <Label>
                {this.state.canEdit ? (
                  <input
                    value={this.state.label}
                    onChange={(e) => this.setState({ label: e.target.value })}
                  />
                ) : (
                  <SpanLabel> {label}</SpanLabel>
                )}
                <SpanTime>{formatDistanceToNow(this.state.time)} ago</SpanTime>
              </Label>

              <ButtonEdit
                type={"button"}
                onClick={(e) => {
                  this.setState({ canEdit: true });
                }}
              />
              <ButtonDestroy type={"button"} onClick={onDeleted} />
            </>
          }
        />
      </form>
    );
  }
}

Task.defaultProps = {
  id: 0,
  label: "Do it",
  time: new Date(),
  done: false,
  canEdit: false,
};
export {Task};
