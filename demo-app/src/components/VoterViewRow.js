import React from 'react';

import { voterPropTypes } from '../propTypes/voters';

//import { nanToValue } from '../utils';

export const VoterViewRow = ({
  voter,
  onEditVoter,
  onDeleteVoter,
}) => {
  
  return (
    <tr>
      <td>{voter.id}</td>
      <td className="text">{voter.firstName}</td>
      <td className="text">{voter.lastName}</td>
      <td className="text">{voter.address}</td>
      <td className="text">{voter.city}</td>
      <td className="text">{voter.birthday}</td>
      <td className="text">{voter.email}</td>
      <td className="text">{voter.phone}</td>
      <td>
        <button type="button"
          onClick={() => onEditVoter(voter.id)}>Edit</button>
        <button type="button"
          onClick={() => onDeleteVoter(voter.id)}>Delete</button>
      </td>
    </tr>
  );

};

VoterViewRow.propTypes = {
  voter: voterPropTypes,
};