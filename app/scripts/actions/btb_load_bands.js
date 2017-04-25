import api from "../api.js";

export default function retrieveBands() {
  return function(dispatch) {
    $.ajax({
      url: `${api.url}/data/band_table`,
      method: "GET",
      headers: {
        "application-id": api.appId,
        "secret-key": api.restKey
      }
    }).then(function(bands, success, xhr) {
      console.log(bands);
      dispatch({ type: "LOAD_VOTED_BANDS", bands: bands });
    });
  };
}
