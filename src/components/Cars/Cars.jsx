import React from 'react'
import { Car } from '../Car/Car'

export const Cars = ({ cars, setCars, deleteCarHandler }) => {
  return (
    <div>
      {cars?.length > 0 &&
        cars.map((car) => <Car key={car.id} car={car} setCars={setCars} deleteCarHandler={deleteCarHandler} />)}
    </div>
  );
};
