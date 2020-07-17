export const REFRESH_BALLOTS_REQUEST_ACTION = 'REFRESH_BALLOTS_REQUEST';
export const REFRESH_BALLOTS_DONE_ACTION = 'REFRESH_BALLOTS_DONE';
export const REFRESH_ELECTIONS_REQUEST_ACTION = 'REFRESH_ELECTIONS_REQUEST';
export const REFRESH_ELECTIONS_DONE_ACTION = 'REFRESH_ELECTIONS_DONE';
export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const SAVE_BALLOT_REQUEST_ACTION = 'SAVE_BALLOT_REQUEST';
export const EDIT_ELECTION_ID_ACTION = 'EDIT_ELECTION_ID';
export const EDIT_VOTER_ID_ACTION = 'EDIT_VOTER_ID';
export const SET_ERROR_MESSAGE_ACTION = 'SET_ERROR_MESSAGE';
export const createRefreshBallotsRequestAction = () => ({
  type: REFRESH_BALLOTS_REQUEST_ACTION,
});

export const createRefreshBallotsDoneAction = ballots => ({
  type: REFRESH_BALLOTS_DONE_ACTION,
  ballots,
});

export const createRefreshElectionsRequestAction = () => ({
  type: REFRESH_ELECTIONS_REQUEST_ACTION,
});

export const createRefreshElectionsDoneAction = elections => ({
  type: REFRESH_ELECTIONS_DONE_ACTION,
  elections,
});

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createRefreshVotersDoneAction = voters => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const refreshBallots = () => {

  return dispatch => {

    dispatch(createRefreshBallotsRequestAction());
    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(ballots => dispatch(createRefreshBallotsDoneAction(ballots)));
  };

};

export const refreshElections = () => {

  return dispatch => {

    dispatch(createRefreshElectionsRequestAction());
    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(elections => dispatch(createRefreshElectionsDoneAction(elections)));
  };

};


export const refreshVoters = () => {

  return dispatch => {

    dispatch(createRefreshVotersRequestAction());
    return fetch('http://localhost:3060/voters')
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)));
  };

};

export const createSaveBallotRequestAction = ballot =>
  ({ type: SAVE_BALLOT_REQUEST_ACTION, ballot });

export const saveBallot = ballot => {

  return dispatch => {
    
    dispatch(createSaveBallotRequestAction(ballot));
    // need to create a payload  object
    const  payload =  {
        id: ballot.electionId,
        name: ballot.name,
        voterIds: ballot.voterIds,
        questions: ballot.questions
    }

    return fetch('http://localhost:3060/elections/' + encodeURIComponent(ballot.electionId), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(() => dispatch(refreshBallots()));

  }
};

export const createEditElectionId = electionId => 
  ({ type: EDIT_ELECTION_ID_ACTION, electionId });


export const createEditVoterId = voterId => 
({ type: EDIT_VOTER_ID_ACTION, voterId });


export const setErrorMessage = message => 
({ type: SET_ERROR_MESSAGE_ACTION, message });

// export const saveElectionId = electionId => {
//   console.log("Called Actions with electionId " + electionId);
//   return dispatch => {
//     dispatch(createEditElectionId(electionId));
//   }
// }