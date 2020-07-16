import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  saveElection,
  addElection, refreshElection,
} from '../actions/electionAction';

import { ElectionTool } from '../components/ElectionTool';
import { LoadingModal } from '../components/LoadingModal';

export const ElectionToolContainer = () => {

  const stateProps = useSelector(state => state);

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshElection: refreshElection,
    onAddElection: addElection,
    onSaveElection: saveElection,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshElection();

  }, [ dispatchProps ]);


  return <>
    <ElectionTool {...dispatchProps} {...stateProps} />
    <LoadingModal isLoading={stateProps.isLoading} />
  </>;
};