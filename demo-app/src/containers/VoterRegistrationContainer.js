import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addVoter, refreshVoters,
} from '../actions/voterToolActions';

import { VoterRegistration } from '../components/VoterRegistration';
import { LoadingModal } from '../components/LoadingModal';

export const VoterRegistrationContainer = () => {

  const stateProps = useSelector(state => state.votingTool);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshVoters: refreshVoters,
    onAddVoter: addVoter,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);


  return <>
    <VoterRegistration {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};