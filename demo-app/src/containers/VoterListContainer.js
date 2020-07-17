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

  const [voters, isLoading, editVoterId] = useSelector(state => {

    const sortColName = state.votingTool.sortColName;
    console.log("calling setSortColName");
    const votersCopy =
      state.votingTool.voters.concat().sort(function (a, b) {
        if (a[sortColName] < b[sortColName]) {
          return -1;
        } else if (a[sortColName] > b[sortColName]) {
          return 1;
        } else {
          return 0;
        }
      });
    return [votersCopy, state.votingTool.isLoading, state.votingTool.editVoterId];
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
    <VoterList {...dispatchProps} voters={voters} editVoterId={editVoterId} />
    <LoadingModal isLoading={isLoading} />
  </>;
};