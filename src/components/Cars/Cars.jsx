import { Car } from '../Car/Car';

export const Cars = ({ cars, deleteCarHandler, handleSetValues }) => {
  return (
    <div>
      {cars?.map((car) => (
        <Car
          key={car.id}
          car={car}
          deleteCarHandler={deleteCarHandler}
          handleSetValues={handleSetValues}
        />
      ))}
    </div>
  );
};
