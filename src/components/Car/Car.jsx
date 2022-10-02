import React from 'react';

import { carService } from '../../services';

export const Car = ({ car, setCars, deleteCarHandler }) => {
  const { id, model, price, year, photo } = car;

  const sendPhoto = async (event) => {
    const formData = new FormData();
    const [photo] = event.target.files;
    formData.append('photo', photo);

    try {
      const data = await carService.addPhotoById(id, formData); // data - car object with image
      setCars((cars) => {
        const targetCar = cars.find((carItem) => carItem.id === id);
        // URL.createObjectURL(photo) -> blob:http://127.0.0.1:5173/8ae9d5b3-f317-4c57-819d-01c768b9eba1
        Object.assign(targetCar, {
          ...data,
          photo: URL.createObjectURL(photo),
        });
        return [...cars];
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>id: {id}</div>
      <div>model: {model}</div>
      <div>price: {price}</div>
      <div>year: {year}</div>
      {photo ? (
        <img src={photo} alt={model} />
      ) : (
        <input type="file" onChange={sendPhoto} />
      )}
      <button onClick={() => deleteCarHandler(id)}>Delete</button>
    </div>
  );
};
