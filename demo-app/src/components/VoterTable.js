import React, { useState }  from 'react';

import { votersPropTypes } from '../propTypes/voters';
import { VoterViewRow } from './VoterViewRow';
import { VoterEditRow } from './VoterEditRow';

export const VoterTable = ({
  voters, editVoterId,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
  onSaveVoter: saveVoter,
  onCancelVoter: cancelVoter,
  onDeleteVoters,
  onSetSortColName: setSortColName,
}) => {

  //const [sortedField, setSortedField] = useState([]);

  const [selectedIds, setSelectedIds] = useState([]);

  const deleteVoters = () => {
    onDeleteVoters(selectedIds);
  };

  const selectVoter = (selected, voterId) => {
    selected 
      ? setSelectedIds(selectedIds.concat(voterId))
      : setSelectedIds(selectedIds.filter(id => id !== voterId));
  };

  // const sortListBy = (sortColName) => {
  //   console.log("sorting the table by." + sortColName + ". Voters:" + voters);
  //   voters = ["a"];
  // }

  console.log(selectedIds);

  return (
    <>
    <table>
      <thead>
        <tr>
        <th><a href="#" onClick={() => setSortColName('id')}>ID</a></th>
          <th><a href="#" onClick={() => setSortColName('firstName')}>First Name</a></th>
          <th><a href="#" onClick={() => setSortColName('lastName')}>Last Name</a></th>
          <th><a href="#" onClick={() => setSortColName('address')}>Address</a></th>
          <th><a href="#" onClick={() => setSortColName('city')}>City</a></th>
          <th><a href="#" onClick={() => setSortColName('Birthdate')}>Birthday</a></th>
          <th><a href="#" onClick={() => setSortColName('email')}>Email</a></th>
          <th><a href="#" onClick={() => setSortColName('phone')}>Phone #</a></th>
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
                  onEditVoter={editVoter} onDeleteVoter={deleteVoter} selected={selectedIds.includes(voter.id)} onSelectVoter={selectVoter} />)}
      </tbody>
    </table> 
    <button type="button" onClick={deleteVoters}>Delete Voters</button>
    </>
  );

};

VoterTable.defaultProps = {
  voters: [],
};

VoterTable.propTypes = {
  voters: votersPropTypes,
};