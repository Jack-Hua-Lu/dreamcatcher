import React from 'react';

import { voterPropTypes } from '../propTypes/voters';

export const VoterViewRow = ({
  voter,
  onEditVoter,
  onDeleteVoter,
  onSelectVoter,
  selected,
}) => {


  return (<>
      <tr>
        <td>{voter.id}</td>
        <td className="text">{voter.firstName}</td>
        <td className="text">{voter.lastName}</td>
        <td className="text">{voter.address}</td>
        <td className="text">{voter.city}</td>
        <td className="text">{voter.birthDate}</td>
        <td className="text">{voter.emailAddress}</td>
        <td className="text">{voter.phone}</td>
        <td>
          <button type="button"
            onClick={() => onEditVoter(voter.id)}>Edit</button>
          <button type="button"
          onClick={() => onDeleteVoter(voter.id)}>Delete</button>
          <input type="checkbox" name="deleteVoters" id="deleteVoters" checked={selected}
            onChange={(e) => onSelectVoter(e.target.checked, voter.id)}  />
        </td>
      </tr>
  </>
  );

};

VoterViewRow.propTypes = {
  voter: voterPropTypes,
};