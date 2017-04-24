import api from "../api.js";
$.ajax({
  url: `${api.url}/data/users/${action.ownerId}`,
  method: "GET",
  headers: {
    "application-id": api.appId,
    "secret-key": api.restKey
  }
}).then(function(data, success, xhr) {
  console.log(data);
});
// store.dispatch({
//   type: "LOAD_DATA",
//   ownerId: data.ownerId,
//   username: data.username,
//   name: data.fullName,
//   token: action.token
// });
