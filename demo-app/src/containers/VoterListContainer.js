import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  saveVoter, deleteVoter, createEditVoterAction,
  createCancelVoterAction, refreshVoters, deleteVoters
} from '../actions/voterToolActions';

import { VoterList } from '../components/VoterList';
import { LoadingModal } from '../components/LoadingModal';

export const VoterListContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onSaveVoter: saveVoter,
    onDeleteVoter: deleteVoter,
    onEditVoter: createEditVoterAction,
    onCancelVoter: createCancelVoterAction,
    onDeleteVoters: deleteVoters,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);


  return <>
    <VoterList {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};