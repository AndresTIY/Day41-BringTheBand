import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";
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
  handleVote(name, url, id) {
    let runOnce = true;
    console.log(id);
    let bandId = this.props.bandsVoted.forEach(band => {
      return band.band_id;
    });
    if (id === bandId) {
      console.log("it's a match");
    } else {
      this.props.dispatch(addNewBand(name, url, id));
    }
  }
  //   this.props.bandsVoted.forEach(band => {
  //     if (band.band_name === name && runOnce) {
  //       console.log("it's a match!");
  //       this.props.dispatch(addVote(band.objectId, band.votes));
  //       runOnce = false;
  //     } else if (band.band_name !== name && runOnce) {
  //       console.log("addNewBand just ran");
  //       this.props.dispatch(addNewBand(name, url, id));
  //       runOnce = false;
  //     }
  //   });
  // }

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
