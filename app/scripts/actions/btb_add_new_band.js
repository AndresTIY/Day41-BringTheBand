import api from "../api.js";
import { connect } from "react-redux";

export default function addNewBand(name, url, id) {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/band_table`,
      method: "POST",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey,
        "Content-Type": "application/json",
        "application-type": "REST"
      },
      data: JSON.stringify({
        band_name: name,
        image_url: url,
        band_id: id,
        votes: 1
      })
    });
    // .then(thanks for the vote! check out the results page to see!)
  };
}

// export default function addNewBand(name, url) {
//   return function(dispatch) {
//     dispatch({ type: "BAND_VOTE", name: name, url: url, votes: 1 });
//   };
// }
