import { useForm } from 'react-hook-form';

import { usersService } from '../../services';
import styles from './UserForm.module.css';

export const UserForm = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
    const { name, username, email, phone, street, suite, city, zipcode } = data;

    const user = {
      name,
      username,
      email,
      phone,
      address: {
        street,
        suite,
        city,
        zipcode
      }
    }

    usersService.create(user).then((res) => console.log('RESPONSE >>>', res));
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={styles.form}>
      <div className={styles.formSection}>
        <h2>User info</h2>
        <input
          type="text"
          {...register('name')}
          placeholder="Name..."
          className={styles.input}
          required
        />
        <input
          type="text"
          {...register('username')}
          placeholder="Username..."
          className={styles.input}
          required
        />
        <input
          type="email"
          {...register('email')}
          placeholder="Email..."
          className={styles.input}
          required
        />
        <input
          type="number"
          {...register('phone')}
          placeholder="Phone..."
          className={styles.input}
          required
        />
      </div>

      <div className={styles.formSection}>
        <h2>User Address</h2>
        <input
          type="text"
          {...register('street')}
          placeholder="Street..."
          className={styles.input}
          required
        />
        <input
          type="text"
          {...register('suite')}
          placeholder="Suite..."
          className={styles.input}
          required
        />
        <input
          type="text"
          {...register('city')}
          placeholder="City..."
          className={styles.input}
          required
        />
        <input
          type="number"
          {...register('zipcode')}
          placeholder="Zipcode..."
          className={styles.input}
          required
        />
      </div>

      <button type="submit">Create user</button>
    </form>
  );
};
