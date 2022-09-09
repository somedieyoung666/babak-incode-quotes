// Reducer to render the entire list of quotes
const defaultState = {
  data: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEW_DATA":
      return { ...state, data: [...action.payload] };
    default:
      return state;
  }
};
