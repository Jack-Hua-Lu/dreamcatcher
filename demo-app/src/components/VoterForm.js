import React from 'react';
import PropTypes from 'prop-types';

import {
  StringFormControl,
  //NumberFormControl,
} from './FormControls';
import { useForm } from '../hooks/useForm';

export const VoterForm = ({ buttonText, onSubmitVoter }) => {

  const [voterForm, change, resetVoterForm] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '1900-01-01',
    email: '',
    phone: NaN,
  });

  const submitVoter = () => {
    onSubmitVoter(voterForm);
    resetVoterForm();
  };

  return (
    <form>
      {/*
        
        React.createElement(StringFormControl, { 
          caption: 'Make', name: 'make',
          value: voterForm.make, onChange: change,
        });
      
      */}
      <StringFormControl caption="FirstName" name="firstName"
        value={voterForm.make} onChange={change} />
      <StringFormControl caption="LastName" name="lastName"
        value={voterForm.model} onChange={change} />
      <StringFormControl caption="Address" name="address"
        value={voterForm.color} onChange={change} />
      <StringFormControl caption="City" name="city"
        value={voterForm.make} onChange={change} />
      <StringFormControl caption="Birthdate" name="birthdate"
        value={voterForm.model} onChange={change} />
      <StringFormControl caption="Email" name="email"
        value={voterForm.color} onChange={change} />
      <StringFormControl caption="Phone" name="phone"
        value={voterForm.price} onChange={change} />
      <button type="button" onClick={submitVoter}>{buttonText}</button>
    </form>
  )

};

VoterForm.defaultProps = {
  buttonText: 'Submit Voter',
};

VoterForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitVoter: PropTypes.func.isRequired,
};