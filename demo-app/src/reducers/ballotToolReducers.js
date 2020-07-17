import { combineReducers } from "redux";

import {
  EDIT_ELECTION_ID_ACTION, EDIT_VOTER_ID_ACTION ,REFRESH_BALLOTS_DONE_ACTION, 
  REFRESH_ELECTIONS_DONE_ACTION, REFRESH_VOTERS_DONE_ACTION,
  SET_ERROR_MESSAGE_ACTION
} from '../actions/ballotToolActions';

export const ballotsReducer = (ballots = [], action) => {

  if (action.type === REFRESH_BALLOTS_DONE_ACTION) {
    return action.ballots;
  }

  return ballots;

};

export const electionsReducer = (elections = [], action) => {

    if (action.type ===REFRESH_ELECTIONS_DONE_ACTION) {
      return action.elections;
    }
  
    return elections;
  
  };

export const votersReducer = (voters = [], action) => {

    if (action.type === REFRESH_VOTERS_DONE_ACTION) {
      return action.voters;
    }
  
    return voters;
  
  };

export const electionIdReducer = (electionId = -1, action) => {
  console.log("In the reducer" + electionId);
  if (action.type === EDIT_ELECTION_ID_ACTION) {
    return action.electionId;
  }
  if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
      return -1;
  }
  return electionId;

};


export const voterIdReducer = (voterId = -1, action) => {
    console.log("In the reducer" + voterId);
    if (action.type === EDIT_VOTER_ID_ACTION) {
      return action.voterId;
    }
    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return -1;
    }
    return voterId;
  };

export const errorMessageReducer = (message = -1, action) => {
    console.log("In the reducer" + message);
    if (action.type === SET_ERROR_MESSAGE_ACTION) {
        return action.message;
    }
    if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
        return -1;
    }
    return message;
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

export const ballotToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  ballots: ballotsReducer,
  electionId: electionIdReducer,
  voterId: voterIdReducer,
  elections: electionsReducer,
  voters: votersReducer,
});