import React, { Component } from "react";
import cloneDeep from "clone-deep";

import "./App.css";

import Character from "./Components/Character";
import FilterSection from "./Components/FilterSection";

import Data from "./assets/data";

class App extends Component {
  state = {
    filters: {
      filterGender: null,
      filterStatus: null
    },
    data: { ...Data }
  };

  filterHandler = (filter, filterType) => {
    let stateFilters = cloneDeep(this.state.filters);

    if (filterType === "genero") {
      stateFilters.filterGender = filter;
      if (filter === "Todos") {
        stateFilters.filterGender = null;
      }
    }

    if (filterType === "status") {
      stateFilters.filterStatus = filter;
      if (filter === "Todos") {
        stateFilters.filterStatus = null;
      }
    }

    console.log(stateFilters);
    this.setState({ filters: stateFilters });
  };

  dataFiltering = completeData => {
    let filteredData = cloneDeep(completeData);
    let filteredResults = cloneDeep(completeData.data.results);

    if (this.state.filters.filterGender) {
      filteredResults = filteredResults.filter(cha => {
        return cha.gender === this.state.filters.filterGender;
      });
    }

    if (this.state.filters.filterStatus) {
      filteredResults = filteredResults.filter(cha => {
        return cha.status === this.state.filters.filterStatus;
      });
    }

    console.log("filteredResults");
    console.log(filteredResults);

    filteredData.data.results = filteredResults;

    return filteredData;
  };

  render() {
    const filteredData = this.dataFiltering(this.state);

    return (
      <div className="App">
        <div className="content">
          <div className="main_content">
            {filteredData.data.results.map(item => {
              return <Character key={item.id} characterInfo={item} />;
            })}
          </div>
          <div className="main_sidebar">
            <FilterSection
              filters={this.state.filters}
              onFilterClick={this.filterHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;




    