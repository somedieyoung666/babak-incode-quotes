//For further feature addition - the store is placed in a separate folder, all reducers go to rootReducer, and then it is transferred to the provider
// composeWithDevTools to run the store with both redux-devtools-extension and middleware(thunk) at the same time
import { createStore, combineReducers, applyMiddleware } from "redux";
import { dataReducer } from "./dataReducer";
import { selectReducer } from "./selectReducer";
import { watchingReducer } from "./watchingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  dataReducer,
  selectReducer,
  watchingReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default rootReducer;
