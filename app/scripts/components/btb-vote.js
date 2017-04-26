import React from "react";
class BtbVote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteClick: false
    };
    this.hideVote = this.hideVote.bind(this);
  }
  hideVote() {
    this.setState({
      voteClick: !this.state.voteClick
    });
    console.log(this.state);
    this.props.handleVote();
  }

  render() {
    let showVote = "show";
    let hidden = "hidden";
    if (this.state.voteClick) {
      showVote = "hidden";
      hidden = "show";
    }
    return (
      <div>
        <p className={hidden}>Thanks for your vote!</p>
        <button className={"btn " + showVote} onClick={this.hideVote}>
          Vote
        </button>
      </div>
    );
  }
}
export default BtbVote;

// name = this.props.name
// imgurl = this.props.img
