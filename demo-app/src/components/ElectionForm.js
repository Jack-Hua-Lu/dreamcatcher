import React, {useState} from 'react';

export const ElectionForm = ({ buttonText, onSubmitElection , questions ,onAddQuestion}) => {

  const submitCar = () => {
    electionForm.question = questions;
    onSubmitElection(electionForm);
    resetelectionForm();
  };
  const resetelectionForm =(electionForm) =>{
    // electionForm.name= ' ';
    // electionForm.question= ' ';
  };
  const [ electionForm, setForm ] = useState({
       name: '',
       question: '',
  });
  const change = (e) => {
    setForm({
      ...electionForm,
      [ e.target.name ]: e.target.value,
    });
  }; 
  
  const addQuestion = () => {

    onAddQuestion(electionForm.question);

    setForm({
      ...electionForm,
      question: '',
    });
  }

  return (
    <form>
      {/* <div>Hi..!!{electionForm.question}</div> */}
      <div>
        <lable> Name          :</lable>
        <input type="text" onChange={change} name="name" ></input>
      </div>
      <div>
        <lable>  Ques          :  </lable>
        <input type="text" name="question" onChange={change} value={electionForm.question}></input>
      </div>
      <div>
        <lable>List of questions :</lable>
        <ul>
          {questions.map(question => <li key={question}>{question}</li>)}
        </ul>
      </div>
      <button type="button" onClick={()=>{ addQuestion() }}>Add Question</button>
      
      <button type="button" onClick={submitCar}>Save Election</button>
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