import api from "../api.js";
export default function searchSpotify(searchQuery) {
  $.ajax({
    url: `${api.spotifyGet}`,
    method: "GET"
  }).then(function(data, success, xhr) {
    console.log(data);
  });
}
// store.dispatch({
//   type: "LOAD_DATA",
//   ownerId: data.ownerId,
//   username: data.username,
//   name: data.fullName,
//   token: action.token
// });

// https://api.spotify.com/v1/search?q=car&type=artist
