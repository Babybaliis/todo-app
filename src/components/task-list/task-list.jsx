import React from "react";
import { Li, Ul, Section } from "./task-list-style";
import PropTypes from "prop-types";
import { Task } from "../task";


const TaskList = ({ tasks }) => {

  const elements = tasks.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <Li key={item.id}>
        <Task
          {...itemProps}
          id={id}
        />
      </Li>
    );
  });


  return (
    <Section>

      <Ul>{elements}</Ul>
    </Section>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func,
  changeTask: PropTypes.func
};

export { TaskList };
