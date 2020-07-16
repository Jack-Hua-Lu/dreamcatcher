import React from 'react';

import { carsPropTypes } from '../propTypes/cars';


export const ElectionTable = ({
  elections, 
}) => {
  console.log(elections);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Election Name</th>
          <th>Question </th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        {!elections.length
          ? <tr><td colSpan="6">There are no Election.</td></tr>
        : elections.map(car => <tr key={car.id}>
                              <td>{car.id}</td>
                              <td>{car.electionName}</td>
                              <td>{car.question}</td>
                              <td>{car.options}</td>
                          </tr>)}
      </tbody>
    </table>
  );

};

// ElectionTable.defaultProps = {
//   cars: [],
// };

// ElectionTable.propTypes = {
//   cars: carsPropTypes,
// };