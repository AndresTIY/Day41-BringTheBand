import api from "../api.js";
export default function searchSpotify(searchQuery) {
  return function(dispatch) {
    $.ajax({
      url: `${api.spotifyGet}?q=${searchQuery}&type=artist`,
      method: "GET"
    }).then(function(data, success, xhr) {
      console.log(data);
      dispatch({ type: "LOAD_BAND_SRCH", data: data.artists });
    });
  };
}
