import React from "react";
import addNewBand from "../actions/btb_add_new_band.js";
class BtbVote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.handleVote}>
        Vote
      </button>
    );
  }
}
export default BtbVote;

// name = this.props.name
// imgurl = this.props.img
