import React from "react";
import { Link } from "react-router-dom";

class BtbSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    e.preventDefault(); //prevents page from reloading
    let bandToSearch = this.refs.bandname.value;
    console.log(bandToSearch);
  }

  render() {
    return (
      <section className="search-card">
        <h3>
          We are currently booking bands based on what our audience want! Search for your band and vote for them!
        </h3>
        <div className="search-child">
          <h2>Search Here</h2>
          <form onSubmit={this.handleSearch}>
            <input ref="bandname" type="text" placeholder="Search Here" />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>
    );
  }
}

export default BtbSearch;