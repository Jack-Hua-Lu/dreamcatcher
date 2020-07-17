import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';

import "./CarTool.css";

export const ElectionTool = ({
  elections, 
  questions,
  onAddElection: addElection,
  onAddQuestion: addQuestion,
  onShowElectionIdSummary: showElectionIdSummary,
  electionResults
  //onSaveElection: saveElection,
}) => {
  return (
    <div className="car-tool">
      <ToolHeader headerText="Create a Election" />
      <ElectionForm buttonText="Add Election" onSubmitElection={addElection} 
      questions={questions}
      onAddQuestion={addQuestion} />
      <ElectionTable elections={elections} electionResults={electionResults} onShowElectionIdSummary={showElectionIdSummary} />
    </div>
  );

};