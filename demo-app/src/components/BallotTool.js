import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

export const BallotTool =({election, voter, saveBallot}) => {

    const [checkedQuestionIds, setCheckedQuestionIds] = useState([]);
    const [showSuccessScreen, setShowSuccessScreen] = useState([false]);
    let history = useHistory();
    const onSubmitVote = () => {
        const ballot = {
            electionId: election.id,
            voterId: voter.id,
            name: election.name,
            voterIds: election.voterIds,
            questions: [...election.questions],
        }
        console.log(ballot.questions);
        ballot.voterIds = ballot.voterIds.concat(voter.id);
        ballot.questions.map(question => {
            if(checkedQuestionIds.includes(question.id)){
                question.yesCount++;
            }
        });
        console.log(ballot);
        saveBallot(ballot).then(setShowSuccessScreen(true));
    }

    const onCheckboxClick = (selected, qId) => {
      (checkedQuestionIds.includes(qId)) ? setCheckedQuestionIds(checkedQuestionIds.filter(id => id !== qId))
      :setCheckedQuestionIds(checkedQuestionIds.concat(qId));
    }

    return (<>
        {(showSuccessScreen === true) ? 
        <div>
            <h1> Congratulations, You Voted </h1>
            <button onClick={() => history.push('/')}> Return to Home </button>
        </div> 
        : <div>
        <div>Election name : {election.name}</div>
        <form>
            {election.questions.map( q => 
                <div key={q.id}>
                    {q.question} 
                    <input type="checkbox" key={q.id} caption={q.question} name={q.id} 
                     onChange={(e) => onCheckboxClick(e.target.value, q.id)} />
                </div>)}
            <button type="button" onClick={() =>onSubmitVote()}>Cast Vote</button>
        </form>
        </div>}
        </>
    )
};