import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  saveVoter, deleteVoter, createEditVoterAction,
  createCancelVoterAction, refreshVoters, deleteVoters, createSetSortColumnNameAction
} from '../actions/voterToolActions';

import { VoterList } from '../components/VoterList';
import { LoadingModal } from '../components/LoadingModal';

export const VoterListContainer = () => {

  const [voters, isLoading] = useSelector(state => {

    const sortColName = state.sortColName;
    console.log("calling setSortColName");
    const votersCopy =
      state.voters.concat().sort(function (a, b) {
        if (a[sortColName] < b[sortColName]) {
          return -1;
        } else if (a[sortColName] > b[sortColName]) {
          return 1;
        } else {
          return 0;
        }
      });
    return [votersCopy, state.isLoading];
  });

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
    onDeleteVoters: deleteVoters,
    onSetSortColName: createSetSortColumnNameAction,
  }, dispatch), [dispatch]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [dispatchProps]);


  return <>
    <VoterList {...dispatchProps} voters={voters} />
    <LoadingModal isLoading={isLoading} />
  </>;
};