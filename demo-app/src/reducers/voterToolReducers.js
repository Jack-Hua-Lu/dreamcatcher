import { combineReducers } from "redux";

import {
  EDIT_VOTER_ACTION, CANCEL_VOTER_ACTION, REFRESH_VOTERS_DONE_ACTION,
} from '../actions/voterToolActions';

export const votersReducer = (voters = [], action) => {

  if (action.type === REFRESH_VOTERS_DONE_ACTION) {
    return action.voters;
  }

  return voters;

};

export const editVoterIdReducer = (editVoterId = -1, action) => {

  if (action.type === EDIT_VOTER_ACTION) {
    return action.voterId;
  }

  if ([
    CANCEL_VOTER_ACTION,
    REFRESH_VOTERS_DONE_ACTION,
  ].includes(action.type)) {
    return -1;
  }

  return editVoterId;

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

export const voterToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  voters: votersReducer,
  editVoterId: editVoterIdReducer,
});