export default (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.code,
        loading: false,
      };
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.profile,
        loading: false,
        error: false,
      };
    case "CLEAR_STATE":
      return action.initialState;
    default:
      return state;
  }
};
