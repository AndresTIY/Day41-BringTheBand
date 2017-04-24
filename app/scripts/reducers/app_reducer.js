export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case "TEST_REDUCER":
      // DELETE OR CHANGE ME: I AM JUST AN EXAMPLE
      return Object.assign({}, state, { newData: action.data });

    case "LOGIN_USER":
      return state;

    case "CREATE_USER":
      return state;
  }

  console.log("Unhandled State!");
  return state;
}
