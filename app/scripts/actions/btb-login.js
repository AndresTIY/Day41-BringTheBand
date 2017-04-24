import api from "../api.js";

$.ajax({
  url: api.url + "/users/login",
  method: "POST",
  headers: {
    "application-id": api.appId,
    "secret-key": api.restKey,
    "Content-Type": "application/json",
    "application-type": "REST"
  },
  data: JSON.stringify({
    login: action.email,
    password: action.password
  })
}).then(function(data, success, xhr) {
  console.log(data);
});

// store.dispatch({
//   type: "LOAD_USER",
//   ownerId: data.ownerId,
//   username: data.username,
//   name: data.fullName,
//   token: data["user-token"]
// });
