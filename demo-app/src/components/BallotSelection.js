import React from 'react';

export const BallotSelection = ({elections, electionId, saveElectionId}) => {
    return <>
        <div class="pageHeader"> Select the Election to cast vote </div>
        <div className="selectionLayout">
            <div class="ballots">
            { elections.map( election => <button key={election.id} type="button" onClick={()=>saveElectionId(election.id)} >{election.name}</button>)}
            </div>
        </div>
    </>;
}