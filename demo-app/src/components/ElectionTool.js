import React from 'react';

import { ToolHeader } from './ToolHeader';
import { ElectionTable } from './ElectionTable';
import { ElectionForm } from './ElectionForm';

import "./CarTool.css";

export const ElectionTool = ({
  elections, 
  onAddElection: addElection,
  onSaveElection: saveElection,
}) => {
  console.log(elections);
  return (
    <div className="car-tool">
      <ToolHeader headerText="Create a Election" />
      <ElectionForm buttonText="Add Election" onSubmitElection={addElection} />
      <ElectionTable elections={elections} />
    </div>
  );

};