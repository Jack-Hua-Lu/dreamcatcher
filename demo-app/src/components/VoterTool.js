import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterTable } from './VoterTable';
import { VoterForm } from './VoterForm';

import "./VoterTool.css";

export const VoterTool = ({
  voters, editVoterId,
  onAddVoter: addVoter, onSaveVoter: saveVoter,
  onDeleteVoter: deleteVoter, onEditVoter: editVoter,
  onCancelVoter: cancelVoter,
}) => {

  return (
    <div className="voter-tool">
      <ToolHeader headerText="Voter Tool" />
      <VoterTable voters={voters} editVoterId={editVoterId}
        onEditVoter={editVoter} onDeleteVoter={deleteVoter}
        onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
      <VoterForm buttonText="Add Voter" onSubmitVoter={addVoter} />
    </div>
  );

};