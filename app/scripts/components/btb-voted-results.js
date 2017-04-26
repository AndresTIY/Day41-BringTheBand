import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import retrieveBands from "../actions/btb_load_bands.js";
import container from "../containers/all.js";

class BtbVoted extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(retrieveBands());
  }

  render() {
    console.log(this.props.bandsVoted);

    return (
      <div>
        <p>bands voted for!</p>
      </div>
    );
  }
}

export default connect(container.allState)(BtbVoted);

// return (
//   <div className="band-card" key={i}>
//     <p>{data.name}</p>
//     <img className="band-img" src={bandImage} />
//     <BtbVote
//       handleVote={() => this.props.handleVote(data.name, bandImage)}
//     />
//   </div>
// );
// if (this.props.bandsVoted !== undefined) {
//   return this.props.bandsVoted.map((bands, i) => {
//     console.log("bands", bands);
//   });
// }
