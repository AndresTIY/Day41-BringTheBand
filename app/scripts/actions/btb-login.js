import api from "../api.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

export default function userLogin(email, pw) {
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
      login: email,
      password: pw
    })
  }).then(function(data, success, xhr) {
    console.log(data, success);
  });
}
// store.dispatch({
//   type: "LOAD_USER",
//   ownerId: data.ownerId,
//   username: data.username,
//   name: data.fullName,
//   token: data["user-token"]
// });
