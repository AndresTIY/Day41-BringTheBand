import api from "../api.js";

export default function createUser(name, email, pw) {
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
      username: name,
      email: email,
      password: pw
    })
  }).then(function(data, success, xhr) {
    console.log(data);
  });
}
