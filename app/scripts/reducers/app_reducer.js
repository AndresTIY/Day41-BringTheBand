import userLogin from "../actions/btb-login.js";
import { connect } from "react-redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      bandsVoted: []
    };
  }

  switch (action.type) {
    case "TEST_REDUCER":
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, state, { newData: "Test reducer dispatched" });

    case "USER_LOGGED_IN":
      return Object.assign({}, state, {
        userInfo: action.data
      });

    case "LOAD_BAND_SRCH":
      return Object.assign({}, state, {
        bandInfo: action.data.items
      });

    case "BAND_VOTE":
      let bandsVotedOn = state.bandsVoted.slice();
      let newBandVoted = {
        name: action.name,
        image_url: action.url,
        votes: action.votes
      };
      bandsVotedOn.push(newBandVoted);
      return Object.assign({}, state, {
        bandsVoted: bandsVotedOn
      });
    //make band vote send data to backendless


    case "LOAD_VOTED_BANDS":
      return Object.assign({}, state, {
        bandsVoted: action.bands.data
      });
    // state.bandsVoted.push(action.data)
    case "SAVE_VOTED_BAND":
      let loadedBandState = state.bandsVoted;
      console.log(loadedBandState);
      loadedBandState.push(action.band);
      return Object.assign({}, state, {
        bandsVoted: loadedBandState
      });
  }

  console.log("Unhandled State!");
  return state;
}
// case "SAVE_ANSWER":
//   var surveyAns = state.surveyAnswers.slice();
//   surveyAns.push(action.answer);
//   return Object.assign({}, state, {
//     surveyAnswers: surveyAns
//   });
