import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import retrieveBands from "../actions/btb_load_bands.js";

class BtbVoted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props.dispatch(retrieveBands());
    return (
      <div>
        <p>bands voted for!</p>
      </div>
    );
  }
}

export default connect()(BtbVoted);

// return (
//   <div className="band-card" key={i}>
//     <p>{data.name}</p>
//     <img className="band-img" src={bandImage} />
//     <BtbVote
//       handleVote={() => this.props.handleVote(data.name, bandImage)}
//     />
//   </div>
// );
