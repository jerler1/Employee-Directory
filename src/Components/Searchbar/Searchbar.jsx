import React from "react";
import "./Searchbar.css";

const Searchbar = (props) => {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          id="search"
        />
      </div>
    </form>
  );
};

export default Searchbar;
