import { combineReducers } from "redux";
import { ballotToolReducer } from './ballotToolReducers';
// import {
//   EDIT_CAR_ACTION, CANCEL_CAR_ACTION, REFRESH_CARS_DONE_ACTION,
// } from '../actions/carToolActions';
// this is the uber reducer import your reducers here

export const votingSystemReducers = (votes = [], action) => {
    return votes;
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

export const votingSystemReducer = combineReducers({
  isLoading: isLoadingReducer,
  ballotTool: ballotToolReducer,
    //add your reducers here
});