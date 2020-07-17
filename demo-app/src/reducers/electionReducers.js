import { combineReducers } from "redux";

import {
  REFRESH_ELECTIONS_DONE_ACTION, ADD_QUESTION_ACTION, SHOW_ELECTION_ID_SUMMARY_ACTION
} from '../actions/electionAction';

export const electionReducer = (elections = [], action) => {

  console.log("in electionToolReducer +  " + action.type);

  if (action.type === REFRESH_ELECTIONS_DONE_ACTION) {
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

export const showElectionIdSummaryReducer = (showElectionIdSummary= -1, action) =>{
  if (action.type === SHOW_ELECTION_ID_SUMMARY_ACTION) {
    return action.electionId;
  }
  return showElectionIdSummary;
};


export const questionsReducer = (questions=[], action) =>{
  if (action.type === ADD_QUESTION_ACTION) {
    return questions.concat(action.question);
  }
  return questions;
};

export const electionToolReducer = combineReducers({
  isLoading: isLoadingReducer,
  elections: electionReducer,
  questions: questionsReducer,
  showElectionIdSummary: showElectionIdSummaryReducer,
});