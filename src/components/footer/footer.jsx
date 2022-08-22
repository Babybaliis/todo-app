import React from "react";
import { Button, Div, Span, Footers } from "./footer-style";
import { MODE } from "../app/app";
import PropTypes from "prop-types";

const Footer = ({ mode, setMode, doneItemCount, clearDoneItem }) => {
  return (
    <Footers>
      <Span>{doneItemCount} items left</Span>
      <Div>
        <Button id={1} mode={mode} onClick={() => setMode(MODE[0])}>
          All
        </Button>
        <Button id={2} mode={mode} onClick={() => setMode(MODE[1])}>
          {" "}
          Active
        </Button>
        <Button id={3} mode={mode} onClick={() => setMode(MODE[2])}>
          Done
        </Button>
      </Div>
      <button onClick={() => clearDoneItem()}>Clear completed</button>
    </Footers>
  );
};

Footer.propTypes = {
  clearDoneItem: PropTypes.func.isRequired,
  doneItemCount: PropTypes.number.isRequired,
  setMode: PropTypes.func.isRequired,
  mode: PropTypes.object.isRequired,
};

export {Footer};
