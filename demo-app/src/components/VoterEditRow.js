import React from 'react';
import PropTypes from 'prop-types';

import { voterPropTypes } from '../propTypes/voters';
import { useForm } from '../hooks/useForm';
//import { NumberInput } from './NumberInput';


export const VoterEditRow = ({
  voter,
  onSaveVoter,
  onCancelVoter: cancelVoter,
}) => {

  const [ voterForm, change ] = useForm({
    firstName: voter.firstName,
    lastName: voter.lastName,
    address: voter.address,
    city: voter.city,
    birthDate: voter.birthDate,
    emailAddress: voter.emailAddress,
    phone: voter.phone,
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };
  
  return (
    <tr>
      <td>{voter.id}</td>
      <td><input type="text" name="firstName" value={voterForm.firstName} onChange={change} /></td>
      <td><input type="text" name="lastName" value={voterForm.lastName} onChange={change} /></td>
      <td><input type="text" name="address" value={voterForm.address} onChange={change} /></td>
      <td><input type="text" name="city" value={voterForm.city} onChange={change} /></td>
      <td><input type="date" name="birthDate" value={voterForm.birthDate} onChange={change} /></td>
      <td><input type="text" name="emailAddress" value={voterForm.emailAddress} onChange={change} /></td>
      <td><input name="phone" value={voterForm.phone} onChange={change} /></td>
      <td>
        <button type="button"
          onClick={saveVoter}>Save</button>
        <button type="button"
          onClick={cancelVoter}>Cancel</button>
      </td>
    </tr>
  );

};

VoterEditRow.propTypes = {
  voter: voterPropTypes,
  onSaveVoter: PropTypes.func.isRequired,
  onCancelVoter: PropTypes.func.isRequired,
};