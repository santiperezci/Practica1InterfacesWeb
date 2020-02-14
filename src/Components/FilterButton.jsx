import React from "react";

import "./Styles.css";

const filterButton = props => {
  return (
    <div>
      <button
        className={props.active ? "filter_button_active" : "filter_button"}
        onClick={() => {
          props.onFilterClick(props.buttonText, props.filterButtonType);
        }}
      >
        <span className="filter_button_text">{props.buttonText}</span>
      </button>
    </div>
  );
};

export default filterButton;
