import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

import {
  StringFormControl,
} from './FormControls';
import { useForm } from '../hooks/useForm';

export const VoterForm = ({ buttonText, onSubmitVoter }) => {

  const [voterForm, change, resetVoterForm] = useForm({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    birthdate: '1900-01-01',
    emailAddress: '',
    phone: '',
  });

  const history = useHistory();
  const submitVoter = () => {
    onSubmitVoter(voterForm).then(() => {
      resetVoterForm();
      history.push('/voter');
    });
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
      <StringFormControl caption="Email" name="emailAddress"
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