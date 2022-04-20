import React, { Component } from "react";
import { InstantSearch, SearchBox } from "react-instantsearch-dom";
const Sidebar = () => <div className="sidebar"></div>;

class App extends Component {
  render() {
    return (
      <InstantSearch
        apiKey="9fa89e405d626fa58954eed9e46595df"
        appId="latency"
        index_name="instant search"
      >
        <header className="header">
          Search
          <SearchBox
            translations={{ placeholder: "Search for the products" }}
          />
        </header>
      </InstantSearch>
    );
  }
}
export default App;
