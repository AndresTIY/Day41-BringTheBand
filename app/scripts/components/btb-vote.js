import React from "react";
class BtbVote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let showVote = "show";
    let hidden = "hidden";
    return (
      <div>
        <p className={hidden}>Thanks for your vote!</p>
        <button className={"btn " + showVote} onClick={this.props.handleVote}>
          Vote
        </button>
      </div>
    );
  }
}
export default BtbVote;

// name = this.props.name
// imgurl = this.props.img
