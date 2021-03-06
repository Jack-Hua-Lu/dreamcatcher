import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { voterToolReducer } from '../reducers/voterToolReducers';

export const voterToolStore = createStore(
  voterToolReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
