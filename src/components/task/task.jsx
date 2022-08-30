import React, { Component } from "react";
import {
  ButtonDestroy,
  ButtonEdit,
  Input,
  Label,
  TaskItemDiv,
  SpanTime,
  SpanLabel, ButtonPlay, ButtonStop, SpanTracker, DivTracker
} from "./task-style";
import "../../style.css";
import { formatDistanceToNow } from "date-fns";
import { Div } from "../footer/footer-style";

class Task extends Component {
  state = {
    done: this.props.done,
    label: this.props.label,
    id: this.props.id,
    time: this.props.time,
    tracker: 0,
    canEdit: false,
    play: false
  };

  componentDidMount() {
    setInterval(() => {
      if (this.state.play && !this.state.done) {
        this.setState({ tracker: this.state.tracker += 1 });
      }
    }, 1000);

  }

  getTimeFormat(time) {
    let min = Math.floor(time / 60);
    let sec = time - min * 60;
    return ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
  }

  onChangeCheckBox = (event) => {
    let newItem = { ...this.state };
    newItem.done = !this.state.done;
    this.props.changeTask(newItem, () =>
      this.setState({ done: !this.state.done, play:false })
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
                <SpanTracker>
                  <ButtonPlay type={"button"} onClick={() => this.setState({ play: true })} disabled={this.state.canEdit}/>
                  <ButtonStop type={"button"} onClick={() => this.setState({ play: false })} />
                  {this.getTimeFormat(this.state.tracker)}
                </SpanTracker>
                <SpanTime>{formatDistanceToNow(this.state.time)} ago</SpanTime>
              </Label>

              <ButtonEdit
                type={"button"}
                onClick={(e) => {
                  this.setState({ canEdit: true , play: false });
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
  canEdit: false
};
export { Task };
