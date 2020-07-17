import React from 'react';

export const BallotSelection = ({elections, electionId, saveElectionId}) => {
    return <>
        <div> Select the Election to cast vote </div>
        <div id="ballots">
        { elections.map( election => <button key={election.id} type="button" onClick={()=>saveElectionId(election.id)} >{election.name}</button>)}
        </div>
    </>;
}