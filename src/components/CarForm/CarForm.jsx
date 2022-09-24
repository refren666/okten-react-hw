import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { carsService } from '../../services/cars.service';
import { Cars } from '../Cars/Cars';
import styles from './CarForm.module.css';

export const CarForm = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  useEffect(() => {
    (async () => {
      const response = await carsService.getAll();
      setCars(response);
    })();
  }, []);

  const carHandler = async (data) => {
    if (!selectedCar) {
      try {
        const newCar = await carsService.create(data);
        setCars((prevState) => [...prevState, newCar]);
        reset();
      } catch (error) {
        console.error(error);
      }
      return;
    }

    try {
      const updatedCar = await carsService.update(selectedCar.id, data);
      setCars(prevState => {
        return prevState.map((car) =>
          car.id === selectedCar.id ? updatedCar : car
        );
      })
      setSelectedCar(null);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCarHandler = async (carId) => {
    try {
      await carsService.deleteById(carId);
      // -------------- 1st way --------------
      // const carIdx = cars.findIndex((car) => car.id === carId);
      // const carsCopy = JSON.parse(JSON.stringify(cars));

      // if (carIdx !== -1) {
      //   carsCopy.splice(carIdx, 1);
      //   setCars(carsCopy);
      // } else {
      //   throw new Error('Car does not exist!');
      // }

      // -------------- 2nd way --------------
      setCars((prevState) => prevState.filter((car) => car.id !== carId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetValues = (car) => {
    const { model, price, year } = car;

    setValue('model', model);
    setValue('price', price);
    setValue('year', year);
    setSelectedCar(car);
  };

  return (
    <>
      <form onSubmit={handleSubmit(carHandler)} className={styles.form}>
        <div className={styles.formSection}>
          <input type="text" {...register('model')} placeholder="Model..." />
          <input type="number" {...register('price')} placeholder="Price..." />
          <input type="number" {...register('year')} placeholder="Year..." />
          <button type="submit">{selectedCar ? 'Update' : 'Create'}</button>
        </div>
      </form>

      <Cars
        cars={cars}
        deleteCarHandler={deleteCarHandler}
        handleSetValues={handleSetValues}
      />
    </>
  );
};
