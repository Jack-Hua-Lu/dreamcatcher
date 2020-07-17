import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { electionToolReducer } from '../reducers/electionReducers';

export const electionStore = createStore(
  electionToolReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
