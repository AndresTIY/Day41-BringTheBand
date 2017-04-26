import api from "../api.js";
import { connect } from "react-redux";

export default function addVote(id, votes) {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/band_table/${id}`,
      method: "PUT",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        votes: votes + 1
      })
    });
    // .then(thanks for the vote! check out the results page to see!)
  };
}
