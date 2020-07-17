import React from 'react';
import { NumberFormControl } from './FormControls';
import { useForm } from '../hooks/useForm';
export const BallotVoterVerification = ({election, verifyVoter, errorMsg}) => {

    const [ voterIdForm, change, resetVoterIdForm ] = useForm({
        voterId: NaN,
      });
    
      const submitVoterIdForm = () => {
        verifyVoter(voterIdForm.voterId, election.id);
      };

    return <>
        <div className="identityLayout">
            <div className="pageHeader">
                <h1 > Identify Yourself</h1>
            </div>
            <div className="errorMsg">
                { (errorMsg !== -1) && <h2 id="errorMsg"> {errorMsg} </h2>}
            </div>
            <div className="itemSelections">
                <form>
                    <div className="subTitle">
                    <NumberFormControl caption="Enter your voter ID" name="voterId"
                    value={voterIdForm.voterId} onChange={change} />
                    </div>
                    <div className="submitButton">
                    <button type="button" onClick={() => submitVoterIdForm()}>Verify</button>
                    </div>
                </form>
            </div>
        </div>
    </>
};