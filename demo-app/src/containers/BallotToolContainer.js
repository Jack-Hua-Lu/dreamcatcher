import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { BallotTool} from '../components/BallotTool';
import { BallotSelection} from '../components/BallotSelection';
import { BallotVoterVerification } from '../components/BallotVoterVerification';
import {
    refreshBallots, saveBallot, refreshElections, refreshVoters, createEditElectionId, createEditVoterId, setErrorMessage
} from '../actions/ballotToolActions';

import { LoadingModal } from '../components/LoadingModal';

export const BallotToolContainer = () => {

  const voters = useSelector(state => state.ballotTool.voters);
  const elections = useSelector(state => state.ballotTool.elections);
  const ballots = useSelector(state => state.ballotTool.ballots)
  const stateProps = useSelector(state => state);
  // voterVerified and validForVoting
  const electionId = useSelector(state => state.ballotTool.electionId);
  const voterVerified = useSelector(state => state.ballotTool.voterId);
  const errorMessage = useSelector(state => state.ballotTool.errorMessage);
  const dispatch = useDispatch();
  
    console.log(stateProps);

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshBallots: refreshBallots,
    onSaveBallot: saveBallot,
    onSaveElectionId: createEditElectionId,
    onRefreshElections: refreshElections,
    onRefreshVoters: refreshVoters,
    onSaveVoterId: createEditVoterId,
    onSetErrorMessage: setErrorMessage,
  }, dispatch), [ dispatch ]);

  useEffect(() => {
 // runs only on the first load
    dispatchProps.onRefreshBallots();
    dispatchProps.onRefreshElections();
    dispatchProps.onRefreshVoters();

  }, [ dispatchProps ]);

  console.log(electionId);

  const verifyVoterId = (voterId, electionId) => {
      if(voters.find(v => v.id === voterId)){
        dispatchProps.setErrorMessage("Invalid voter id" + voterId);  
        return false;        
      }
      const election = elections.find(e => e.id === electionId);
      if(election.voters.includes(voterId)) {
        dispatchProps.setErrorMessage("You've already voted for this election" + voterId);      
        return false;    
      }
      dispatchProps.onSaveVoterId(voterId);
      return true;
  }

  return <>
    { 
        (electionId < 1) ? 
        <BallotSelection elections={elections} electionId={electionId} saveElectionId={dispatchProps.onSaveElectionId}/>
        : ((voterVerified > 0) ? <BallotTool  election={elections.find(e => e.id === electionId)} voters={voters}/>
        :  <BallotVoterVerification election={elections.find(e => e.id === electionId)} verifyVoter={verifyVoterId} errorMsg={errorMessage} />)
    }
  </>;
};