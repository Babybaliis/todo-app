import React, { useContext, useState } from "react";
import { H1, Input } from "./new-task-form-style";
import PropTypes from "prop-types";
import { Context } from "../context/Context";

const AddNewTask = () => {
  const [label, setLabel] = useState("");
  const {addItem}=useContext(Context)


  const onLabelChange = (e) => {
    setLabel(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addItem(label, () => setLabel(""));
  };


  return (
    <form onSubmit={onSubmit}>
      <H1> todos</H1>
      <Input
        className="new-todo"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        value={label}
        autoFocus
      />
    </form>
  );

};

AddNewTask.prototype = {
  addItem: PropTypes.func.isRequired
};
export { AddNewTask };