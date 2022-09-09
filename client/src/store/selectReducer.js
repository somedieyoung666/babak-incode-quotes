// Reducer for displaying full information about the quote
const defaultState = {
  select: {
    ticker: "AAPL",
    name: "Apple",
    exchange: "NASDAQ",
    price: "197.51",
    change: "19.99",
    change_percent: "0.93",
    dividend: "0.05",
    yield: "0.92",
    last_trade_time: "2022-09-07T11:16:20.000Z",
  },
};

export const selectReducer = (state = defaultState, action) => {
  switch (action.type) {
    // On new selection (on click in quotes list)
    case "CLICK_SELECT":
      return { ...state, select: { ...action.payload[0] } };
    // When updating from the server
    case "UPDATE_SELECT":
      const current = action.payload.find(
        (quote) => quote.ticker === state.select.ticker
      );
      return { ...state, select: { ...current } };
    default:
      return state;
  }
};
