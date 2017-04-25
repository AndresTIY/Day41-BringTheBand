import React from "react";
import { Link } from "react-router-dom";
import searchSpotify from "../actions/btb_search_action.js";
import BtbSrchResults from "./btb-srch-results.js";
import { connect } from "react-redux";
import addNewBand from "../actions/btb_add_new_band.js";

class BtbSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSearch = this.handleSearch.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }
  handleVote(name, url) {
    this.props.dispatch(addNewBand(name, url));
  }

  handleSearch(e) {
    e.preventDefault(); //prevents page from reloading
    let bandToSearch = this.refs.bandname.value;
    console.log(bandToSearch);
    this.props.dispatch(searchSpotify(bandToSearch));
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
        <BtbSrchResults handleVote={this.handleVote} />
      </section>
    );
  }
}

export default connect()(BtbSearch);
