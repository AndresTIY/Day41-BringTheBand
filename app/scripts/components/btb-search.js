import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import container from "../containers/all.js";
import searchSpotify from "../actions/btb_search_action.js";
import BtbSrchResults from "./btb-srch-results.js";
import addNewBand from "../actions/btb_add_new_band.js";
import addVote from "../actions/btb_add_vote.js";

class BtbSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSearch = this.handleSearch.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }
  handleVote(name, url) {
    let currentVotedBand = this.props.bandsVoted.forEach(band => {
      return band.band_name;
    });
    if (currentVotedBand === name) {
      console.log("its a match!", name);
    }
    this.props.dispatch(addNewBand(name, url));
  }

  handleSearch(e) {
    e.preventDefault(); //prevents page from reloading
    let bandToSearch = this.refs.bandname.value;
    this.props.dispatch(searchSpotify(bandToSearch));
  }

  render() {
    return (
      <section className="search-card">
        <h5>
          We are currently booking bands based on what our audience want! Search for your band and vote for them!
        </h5>
        <div className="search-child">
          <h5>Search Here</h5>
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

export default connect(container.allState)(BtbSearch);
