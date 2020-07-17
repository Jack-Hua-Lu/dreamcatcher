import React, { useMemo, useEffect, useCallback } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

import {
  addElection, refreshElections,createAddQuestionAction,createShowElectionIdSummaryAction
} from '../actions/electionAction';

import { ElectionTool } from '../components/ElectionTool';
import { LoadingModal } from '../components/LoadingModal';

export const ElectionToolContainer = () => {

  const questions = useSelector(state => state.questions);
  const elections = useSelector(state => state.elections);
  const isLoading = useSelector(state => state.isLoading);
  const electionResults = useSelector(state => {

    // put the logic to calculate results

    if (state.showElectionIdSummary < 1) {
      return null;
    }
    const countVote = (election)=>{
    console.log("election ques "+election.questions.map(qus => qus.question +" : "+ qus.yesCount));
      const newElectionIdSummary = {
        report :election.questions.map(qus => ({qus: qus.question, yesCount: qus.yesCount}))
      };
    console.log(newElectionIdSummary);
    return newElectionIdSummary;
    };


    return countVote(elections.find(e => e.id === state.showElectionIdSummary));

    // //get data from election
    // elections.map(e=> (e.id == state.showElectionIdSummary)?  countVote(e): null);
    // var newElection = elections.filter(e=> (e.id === state.showElectionIdSummary));
    // console.log(" new electonId: "+state.showElectionIdSummary+" :  "+newElection.id);
    // //return newElectionIdSummary;
  });

  const dispatch = useDispatch();

  const dispatchProps = useMemo(() => bindActionCreators({
    onRefreshElections: refreshElections,
    onAddElection: addElection,
    onAddQuestion: createAddQuestionAction,
    onShowElectionIdSummary: createShowElectionIdSummaryAction,
  }, dispatch), [ dispatch ]);

  useEffect(() => {

    dispatchProps.onRefreshElections();

  }, [ dispatchProps ]);


  return <>
    <ElectionTool {...dispatchProps} elections={elections} questions={questions} electionResults={electionResults}/>
    <LoadingModal isLoading={isLoading} />
  </>;
};