import React, {useState} from 'react';
//import {modEelections} from '../hooks/modElections'
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';

export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const ADD_QUESTION_ACTION = 'ADD_QUESTION';
export const SHOW_ELECTION_ID_SUMMARY_ACTION = 'SHOW_ELECTION_ID_SUMMARY_QUESTION';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_ELECTION_REQUEST';
// export const EDIT_CAR_ACTION = 'EDIT_CAR';
// export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createRefreshElectionsRequestAction = () => ({
  type: REFRESH_ELECTIONS_REQUEST_ACTION,
});

export const createRefreshElectionsDoneAction = elections => ({
  type: REFRESH_ELECTIONS_DONE_ACTION,
  elections,
});

export const refreshElections = () => {

  return dispatch => {

    dispatch(createRefreshElectionsRequestAction());
    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));

  };

};

export const createAddElectionRequestAction = elections =>
  ({ type: ADD_ELECTION_REQUEST_ACTION, elections });


export const addElection = election => {

  const newElection = {
    name: election.name,
    voterIds: [],
    questions: election.question.map( (q, i) => ({ id: i +1, question: q, yesCount: 0 }))
  };

  console.log(JSON.stringify(newElection));

  console.log(JSON.stringify(election));
  return dispatch => {
    dispatch(createAddElectionRequestAction(newElection));
    return fetch('http://localhost:3060/elections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newElection),
    })
      .then(() => dispatch(refreshElections()));
  };

  

};

export const createAddQuestionAction = question =>
  ({ type: ADD_QUESTION_ACTION, question });

export const createShowElectionIdSummaryAction = (electionId) =>
  ({ type: SHOW_ELECTION_ID_SUMMARY_ACTION, electionId });


 