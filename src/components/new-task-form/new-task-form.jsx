import React, { Component } from "react";
import { H1, Input } from "./new-task-form-style";

export class AddNewTask extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label, () => this.setState({ label: "" }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <H1> todos</H1>
        <Input
          className="new-todo"
          onChange={this.onLabelChange}
          placeholder="What needs to be done?"
          value={this.state.label}
          autoFocus
        />
      </form>
    );
  }
}
