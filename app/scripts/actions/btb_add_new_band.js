export default function addNewBand(name, url) {
  return function(dispatch) {
    dispatch({ type: "BAND_VOTE", name: name, url: url });
  };
}
