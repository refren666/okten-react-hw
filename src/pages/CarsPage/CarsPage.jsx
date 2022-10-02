import React from 'react';
import { useEffect, useState } from 'react';

import { carService } from '../../services';
import { CarForm, Cars } from '../../components';
import { useSearchParams } from 'react-router-dom';

export const CarsPage = () => {
  const [cars, setCars] = useState([]);

  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  const [query, setQuery] = useSearchParams({ page: '1' }); // ?page=1

  useEffect(() => {
    carService.getAll(query.get('page')).then((response) => {
      setCars(response.data);
      setPrev(response.prev); // .../cars?page=1
      setNext(response.next); // .../cars?page=3
    });
  }, [query]);

  const carHandler = async (data) => {
    try {
      const newCar = await carService.create(data);
      setCars((prevState) => [...prevState, newCar]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCarHandler = async (carId) => {
    try {
      await carService.deleteById(carId);
      setCars((prevState) => prevState.filter((car) => car.id !== carId));
    } catch (error) {
      console.error(error);
    }
  };

  const goToPrevPage = () => {
    setQuery((value) => ({ page: value.get('page') - 1 }));
  };

  const goToNextPage = () => {
    setQuery((value) => ({ page: Number(value.get('page')) + 1 }));
  };

  console.log(query.get('page'));

  return (
    <>
      <CarForm carHandler={carHandler} />
      <hr />
      <Cars cars={cars} setCars={setCars} deleteCarHandler={deleteCarHandler} />
      <button disabled={!prev} onClick={goToPrevPage}>
        Prev Page
      </button>
      <button disabled={!next} onClick={goToNextPage}>
        Next Page
      </button>
    </>
  );
};
