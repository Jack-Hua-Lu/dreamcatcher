export const REFRESH_VOTERS_REQUEST_ACTION = 'REFRESH_VOTERS_REQUEST';
export const REFRESH_VOTERS_DONE_ACTION = 'REFRESH_VOTERS_DONE';

export const ADD_VOTER_REQUEST_ACTION = 'ADD_VOTER_REQUEST';
export const SAVE_VOTER_REQUEST_ACTION = 'SAVE_VOTER_REQUEST';
export const DELETE_VOTER_REQUEST_ACTION = 'DELETE_VOTER_REQUEST';
export const EDIT_VOTER_ACTION = 'EDIT_VOTER';
export const CANCEL_VOTER_ACTION = 'CANCEL_VOTER';

export const createRefreshVotersRequestAction = () => ({
  type: REFRESH_VOTERS_REQUEST_ACTION,
});

export const createRefreshVotersDoneAction = voters => ({
  type: REFRESH_VOTERS_DONE_ACTION,
  voters,
});

export const serverURL = 'http://localhost:3060/voters';
export const refreshVoters = () => {

  return dispatch => {

    dispatch(createRefreshVotersRequestAction());
    return fetch(serverURL)
      .then(res => res.json())
      .then(voters => dispatch(createRefreshVotersDoneAction(voters)))
      .then(voters => console.log(voters)
      );
  };

};

export const createAddVoterRequestAction = voter =>
  ({ type: ADD_VOTER_REQUEST_ACTION, voter });


export const addVoter = voter => {

  return dispatch => {

    dispatch(createAddVoterRequestAction(voter));
    return fetch(serverURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(() => dispatch(refreshVoters()));

  };

};


export const createSaveVoterRequestAction = voter =>
  ({ type: SAVE_VOTER_REQUEST_ACTION, voter });

export const saveVoter = voter => {

  return dispatch => {

    dispatch(createSaveVoterRequestAction(voter));
    return fetch(serverURL + encodeURIComponent(voter.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(voter),
    })
      .then(() => dispatch(refreshVoters()));

  };

}

export const createDeleteVoterRequestAction = voterId =>
  ({ type: DELETE_VOTER_REQUEST_ACTION, voterId });

export const deleteVoter = voterId => {

  return dispatch => {

    dispatch(createDeleteVoterRequestAction(voterId));
    return fetch(serverURL + encodeURIComponent(voterId), {
      method: 'DELETE',
    })
      .then(() => dispatch(refreshVoters()));

  };

};

export const createEditVoterAction = voterId =>
  ({ type: EDIT_VOTER_ACTION, voterId });
export const createCancelVoterAction = () =>
  ({ type: CANCEL_VOTER_ACTION });