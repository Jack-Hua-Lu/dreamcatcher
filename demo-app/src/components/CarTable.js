import React from 'react';

import { carsPropTypes } from '../propTypes/cars';
import { CarViewRow } from './CarViewRow';

export const CarTable = ({ cars }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {!cars.length
          ? <tr><td colSpan="6">There are no cars.</td></tr>
          : cars.map(car => <CarViewRow key={car.id} car={car} />)}
      </tbody>
    </table>
  );

};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = {
  cars: carsPropTypes,
};