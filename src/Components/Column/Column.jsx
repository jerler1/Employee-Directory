import React from "react";
import "./Column.css";

const Column = (props) => {
  return (
    <div class={props.class} style={props.style}>
      {props.children}
    </div>
  );
};

export default Column;
