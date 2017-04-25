import userLogin from "../actions/btb-login.js";
import { connect } from "react-redux";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case "TEST_REDUCER":
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, state, { newData: " Test reducer dispatched" });

    case "USER_LOGGED_IN":
      return Object.assign({}, state, {
        userInfo: action.data
      });

    case "LOAD_BAND_SRCH":
      return Object.assign({}, state, {
        bandInfo: action.data.items
      });
  }

  console.log("Unhandled State!");
  return state;
}
