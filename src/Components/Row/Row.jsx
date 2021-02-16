import React from "react";
import "./Row.css";

const Row = (props) => {
  return (
    <div className={props.class} style={props.style}>
      {props.children}
    </div>
  );
};

export default Row;
