import React from "react";
import { connect } from "react-redux";
import container from "../containers/all.js";
import BtbVote from "./btb-vote.js";

class BtbSrchResults extends React.Component {
  render() {
    if (this.props.bandInfo === undefined) {
      return null;
    } else
      return (
        <div className="row">
          {this.props.bandInfo.map((data, i) => {
            var bandImage =
              "http://berg-group.com/wp-content/uploads/2014/11/Photo_not_available-4.jpg";
            if (data.images.length > 1) {
              bandImage = data.images[1].url;
            }
            return (
              <div className="col s12 m4 l3 band-card" key={i}>
                <div className="medium card">
                  <div className="card-image">
                    <img className="band-img" src={bandImage} />
                    <span className="card-title">{data.name}</span>
                  </div>
                  <div className="card-content">
                    <BtbVote
                      handleVote={() =>
                        this.props.handleVote(data.name, bandImage, data.id)}
                      tabindex="2"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
  }
}

export default connect(container.allState)(BtbSrchResults);
// {this.props.bandInfo.map((bands, i) => {
//   return <p>{bands}</p>;
// })}

// <img key={i} src={data.images[0].url} />
