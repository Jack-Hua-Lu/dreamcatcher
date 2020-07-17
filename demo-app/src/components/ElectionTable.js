import React from 'react';
import {ElectionSummary} from './ElectionSummary';

export const ElectionTable = ({
  elections, 
  electionResults,
  onShowElectionIdSummary,
}) => {

  // var maxQuestions = 0;
  // {
  //   elections.map(election=> 
  //     {
  //       console.log(maxQuestions+" : "+election.questions.length)
  //       maxQuestions = Math.max(election.questions.length, maxQuestions)
  //     } 
  //   );
  // }


  // const Results = ({result}) => (
  //   <div id={result.qus} className="search-results">
  //      Hello..!!{result.qus} 
  //   </div>
    
  // );

  const Results = ({result}) => {
    return (   
      result.report.map( m => 
        <div>
          <div>{m.qus} : {m.yesCount}</div>
        </div>
      )
    );
  };

  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Election Name</th>
          <th>Summary </th>
          
        </tr>
      </thead>
      <tbody>
        {!elections.length
          ? <tr><td colSpan="6">There are no Election.</td></tr>
        : elections.map(election => <tr key={election.id}>
                              <td>{election.id}</td>
                              <td>{election.name}</td>
                              {/* {
                                election.questions.map(question => 
                                <td key={question.id}>{question.question}</td>)
                              } */}
                              <td>
                                <button type="button" onClick={()=> onShowElectionIdSummary(election.id)}>Get Details</button>
                              </td>
                          </tr>
                          
                          )}
      </tbody>
        
    </table>
    <div><br/><br/></div>
    {electionResults && <Results result={electionResults} />}
    </>
    
  );

};

// ElectionTable.defaultProps = {
//   cars: [],
// };

// ElectionTable.propTypes = {
//   cars: carsPropTypes,
// };