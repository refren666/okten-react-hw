import { screens } from '../../const/screens';
import styles from './ChooseCategory.module.css';

const ChooseCategory = ({ handleScreenChange }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <button onClick={() => handleScreenChange(screens.USERS_SCREEN)}>Users</button>
      </div>

      <div className={styles.containerItem}>
        <button onClick={() => handleScreenChange(screens.FLIGHTS_SCREEN)}>Flights</button>
      </div>
    </div>
  );
};

export default ChooseCategory