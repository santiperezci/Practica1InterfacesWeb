import React from "react";

import "./Styles.css";

import FilterButton from "./FilterButton";

const FilterSection = props => {
  return (

        <div className="section_container">
          <div className="section_container_title">
            <h2 className="section_title">Filtro por estado:</h2>
          </div>
          <div className="filters_content">
            <div className="filters_container">
            <FilterButton
                buttonText="All"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === null ? true : false}
              />
              <FilterButton
                buttonText="Alive"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "Alive" ? true : false}
              />
              <FilterButton
                buttonText="Dead"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "Dead" ? true : false}
              />
              <FilterButton
                buttonText="unknown"
                onFilterClick={props.onFilterClick}
                filterButtonType="status"
                active={props.filters.filterStatus === "unknown" ? true : false}
              />
            </div>
          </div>
        </div>
      //</div>
   // </div>
  );
};

export default FilterSection;