import React from 'react';
import { NumberFormControl } from './FormControls';
import { useForm } from '../hooks/useForm';
export const BallotVoterVerification = ({election, verifyVoter, errorMsg}) => {

    const [ voterIdForm, change, resetVoterIdForm ] = useForm({
        voterId: NaN,
      });
    
      const submitVoterIdForm = () => {
        verifyVoter(voterIdForm.voterId, election.id);
        resetVoterIdForm();
      };

    return <>
        <div>
            { errorMsg && <h2 id="errorMsg"> {errorMsg} </h2>}
        </div>
        <form>
            <NumberFormControl caption="voterId" name="voterId"
            value={voterIdForm.voterId} onChange={change} />
        <button type="button" onClick={submitVoterIdForm}>Verify</button>
        </form>
    </>
}