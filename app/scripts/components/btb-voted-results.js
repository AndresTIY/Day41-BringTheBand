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
    console.log("first line", this.props.bandsVoted);
    return (
      <div className="row">
        {this.props.bandsVoted.map((data, i) => {
          return (
            <div className="col s12 m4 l3 band-card" key={i}>
              <div className="medium card">
                <div className="card-image">
                  <img className="band-img" src={data.image_url} />
                  <span className="card-title">{data.band_name}</span>
                </div>
                <div className="card-content">
                  <p>Votes so far: {data.votes}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    );
  }
}
export default connect(container.allState)(BtbVoted);
