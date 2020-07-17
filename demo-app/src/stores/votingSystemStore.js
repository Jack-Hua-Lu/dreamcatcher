import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { votingSystemReducer } from '../reducers/votingSystemReducers';

export const votingSystemStore = createStore(
    votingSystemReducer,
    composeWithDevTools(applyMiddleware(thunk)),
); 