import React from 'react';
import PropTypes from 'prop-types';

import {
  StringFormControl,
  NumberFormControl,
} from './FormControls';
import { useForm } from '../hooks/useForm';

export const ElectionForm = ({ buttonText, onSubmitElection }) => {

  const [ electionForm, change, resetelectionForm ] = useForm({
    electionName: '',
    question: '',
    options: '',
  });

  const submitCar = () => {
    onSubmitElection(electionForm);
    resetelectionForm();
  };

  return (
    <form>
      <StringFormControl caption="Election Name" name="electionName"
        value={electionForm.electionName} onChange={change} />
      <StringFormControl caption="Question" name="question"
        value={electionForm.question} onChange={change} />
      <StringFormControl caption="Options" name="options"
      value={electionForm.options} onChange={change} />
    
      <button type="button" onClick={submitCar}>{buttonText}</button>
    </form>
  )

};

// ElectionForm.defaultProps = {
//   buttonText: 'Submit Car',
// };

// ElectionForm.propTypes = {
//   buttonText: PropTypes.string,
//   onSubmitCar: PropTypes.func.isRequired,
// };