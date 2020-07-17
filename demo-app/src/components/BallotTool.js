import React from 'react';

export const BallotTool =({election, voters}) => {
    return (<>
        <div> Hello Ballot</div>
        <div>Election name : {election.name}</div>
        <ul>
            {election.questions.map( q => <li key={q.id}>{q.question}</li>)}
        </ul>
        </>
    )
};