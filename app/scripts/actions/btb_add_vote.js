import api from "../api.js";
import { connect } from "react-redux";

export default function addVote(name, id) {
  console.log("name", name);
  console.log("id", id);
  // return function(dispatch) {
  //   $.ajax({
  //     url: `${api.url}/data/band_table/${id}`,
  //     method: "PUT",
  //     headers: {
  //       "application-id": api.appId,
  //       "secret-key": api.restKey,
  //       "Content-Type": "application/json",
  //       "application-type": "REST"
  //     },
  //     data: JSON.stringify({
  //       band_name: name,
  //       image_url: url,
  //       votes: 1
  //     })
  //   });
  //   // .then(thanks for the vote! check out the results page to see!)
  // };
}
