import React from 'react';

import { ToolHeader } from './ToolHeader';
import { VoterForm } from './VoterForm';

import "./VoterTool.css";

export const VoterRegistration = ({
  onAddVoter: addVoter,
}) => {

  return (
    <div className="voter-tool">
      <ToolHeader headerText="Voter Registration" />
      <VoterForm buttonText="Register Voter" onSubmitVoter={addVoter} />
    </div>
  );

};