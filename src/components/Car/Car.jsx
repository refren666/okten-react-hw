import styles from './Car.module.css';

export const Car = ({ car, deleteCarHandler, handleSetValues }) => {
  const { id, model, price, year } = car;

  return (
    <div className={styles.carBlock}>
      <h3>Model: {model}</h3>
      <p>Price: ¥{price}</p>
      <p>Year: {year}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => deleteCarHandler(id)}>Delete</button>
        <button onClick={() => handleSetValues(car)}>Update</button>
      </div>
    </div>
  );
};
