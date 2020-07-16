export const REFRESH_ELECTION_REQUEST_ACTION = 'REFRESH_ELECTION_REQUEST';
export const REFRESH_ELECTION_DONE_ACTION = 'REFRESH_ELECTION_DONE';

export const ADD_ELECTION_REQUEST_ACTION = 'ADD_ELECTION_REQUEST';
export const SAVE_ELECTION_REQUEST_ACTION = 'SAVE_ELECTION_REQUEST';
export const DELETE_CAR_REQUEST_ACTION = 'DELETE_ELECTION_REQUEST';
// export const EDIT_CAR_ACTION = 'EDIT_CAR';
// export const CANCEL_CAR_ACTION = 'CANCEL_CAR';

export const createRefreshElectionRequestAction = () => ({
  type: REFRESH_ELECTION_REQUEST_ACTION,
});

export const createRefreshElectionDoneAction = elections => ({
  type: REFRESH_ELECTION_DONE_ACTION,
  elections,
});

export const refreshElection = () => {

  return dispatch => {

    dispatch(createRefreshElectionRequestAction());
    return fetch('http://localhost:3060/elections')
      .then(res => res.json())
      .then(elections => dispatch(createRefreshElectionDoneAction(elections)));

  };

};

export const createAddElectionRequestAction = elections =>
  ({ type: ADD_ELECTION_REQUEST_ACTION, elections });


export const addElection = elections => {

  return dispatch => {

    dispatch(createAddElectionRequestAction(elections));
    return fetch('http://localhost:3060/elections', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(elections),
    })
      .then(() => dispatch(refreshElection()));

  };

};


export const createSaveElectionRequestAction = elections =>
  ({ type: SAVE_ELECTION_REQUEST_ACTION, elections });

export const saveElection = elections => {

  return dispatch => {

    dispatch(createSaveElectionRequestAction(elections));
    return fetch('http://localhost:3060/elections/' + encodeURIComponent(elections.id), {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(elections),
    })
      .then(() => dispatch(refreshElection()));

  };
  
}

// export const createDeleteCarRequestAction = carId =>
//   ({ type: DELETE_CAR_REQUEST_ACTION, carId });

// export const deleteCar = carId => {

//   return dispatch => {

//     dispatch(createDeleteCarRequestAction(carId));
//     return fetch('http://localhost:3060/cars/' + encodeURIComponent(carId), {
//       method: 'DELETE',
//     })
//       .then(() => dispatch(refreshCars()));

//   };
  
// };
  
// export const createEditCarAction = carId =>
//   ({ type: EDIT_CAR_ACTION, carId });
// export const createCancelCarAction = () =>
//   ({ type: CANCEL_CAR_ACTION });