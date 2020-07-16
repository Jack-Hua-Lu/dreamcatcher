import React from 'react';

import { votersPropTypes } from '../propTypes/voters';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = ({
  voters, editVoterId,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
  onSaveVoter: saveVoter,
  onCancelVoter: cancelVoter,
}) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Birthday</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {!voters.length
          ? <tr><td colSpan="6">There are no voters.</td></tr>
          : voters.map(voter => voter.id === editVoterId
              ? <VoterEditRow key={voter.id} voter={voter}
                  onSaveVoter={saveVoter} onCancelVoter={cancelVoter} />
              : <VoterViewRow key={voter.id} voter={voter}
                  onEditVoter={editVoter} onDeleteVoter={deleteVoter} />)}
      </tbody>
    </table>
  );

};

VoterTable.defaultProps = {
  voters: [],
};

VoterTable.propTypes = {
  voters: votersPropTypes,
};