// Reducer for working with watching group
const defaultState = {
  watching: [],
};

export const watchingReducer = (state = defaultState, action) => {
  // For the convenience of working with already existing quotes in the watching group
  const currentTickers = state.watching.map((cur) => cur.ticker);
  switch (action.type) {
    case "ADD_WATCHING":
      // Condition to prevent the second addition of the same quote
      if (!currentTickers.includes(action.payload.ticker))
        return {
          ...state,
          watching: [...state.watching, { ...action.payload }],
        };
      else
        return {
          ...state,
          watching: [...state.watching],
        };

    case "REMOVE_WATCHING":
      const update = state.watching.filter(
        (quote) => quote.ticker !== action.payload.ticker
      );
      return {
        ...state,
        watching: [...update],
      };

    // When updating from the server
    case "UPDATE_WATCHINGS":
      const updated = [];
      action.payload.forEach((el) => {
        if (currentTickers.includes(el.ticker)) {
          updated.push(el);
        }
      });
      return { ...state, watching: [...updated] };
    default:
      return state;
  }
};
