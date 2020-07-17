import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterTable } from './VoterTable';
// import {
//   StringFormControl,
// } from './FormControls';

import "./VoterTool.css";

export const VoterList = ({
  voters, editVoterId,
  onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter, onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
  onDeleteVoters: deleteVoters,
  onSetSortColName: setSortColName,
}) => {

  return (
    <div className="voter-tool">
      <ToolHeader headerText="Voter List" />
      <VoterTable voters={voters} editVoterId={editVoterId}
        onEditVoter={editVoter} onDeleteVoter={deleteVoter}
        onSaveVoter={saveVoter} onCancelVoter={cancelVoter}
        onDeleteVoters={deleteVoters} onSetSortColName={setSortColName}
        />
    </div>
  );

};