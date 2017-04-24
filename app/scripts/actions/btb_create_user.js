import api from "../api.js";

$.ajax({
  url: api.url + "/data/Users",
  method: "POST",
  headers: {
    "application-id": api.appId,
    "secret-key": api.restKey,
    "Content-Type": "application/json",
    "application-type": "REST"
  },
  data: JSON.stringify({
    username: action.username,
    email: action.email,
    password: action.password
  })
}).then(function(data, success, xhr) {
  console.log(data);
});
