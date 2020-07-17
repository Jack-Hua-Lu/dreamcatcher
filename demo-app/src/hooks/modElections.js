import React , { useState } from 'react';
export const  modEelections= (elections) => {
    const [elections, setValues] = useState({
          name: "",
          voterIds: [],
          questions:[]
         });
        //console.log("values from action : "+elections.name+" : "+elections.question.map(qus=> qus));
    setValues({
          ...elections,
          questions:[{question:"Dummy question"}],
         });
         //console.log(JSON.stringify(elections));
  };