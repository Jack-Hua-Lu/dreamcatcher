import { combineReducers } from "redux";

import {
  REFRESH_ELECTION_DONE_ACTION
} from '../actions/electionAction';

export const electionReducer = (elections = [], action) => {

  if (action.type === REFRESH_ELECTION_DONE_ACTION) {
    return action.elections;
  }
  return elections;

};


export const isLoadingReducer = (isLoading = false, action) => {

  if (action.type.endsWith('_REQUEST')) {
    return true;
  }

  if (action.type.endsWith('_DONE')) {
    return false;
  }

  return isLoading;
};

export const electionToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  elections: electionReducer,
});