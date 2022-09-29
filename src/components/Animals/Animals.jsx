import { useState, useContext } from 'react';

import { AnimalsContext } from '../../context';
import { ADD_CAT, ADD_DOG } from '../../actions';
import { Cat } from '../Cat/Cat';
import { Dog } from '../Dog/Dog';
import styles from './Animals.module.css';

export const Animals = () => {
  const { state, dispatch } = useContext(AnimalsContext);

  const [name, setName] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('');

  const handleSelectAnimal = (e) => {
    if (e.target.value) setSelectedAnimal(e.target.value);
  };

  const handleSetName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedAnimal === 'cat') {
      dispatch({ type: ADD_CAT, payload: { name } });
    } else if (selectedAnimal === 'dog') {
      dispatch({ type: ADD_DOG, payload: { name } });
    } else {
      alert('Select animal');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleSetName}
          placeholder={'Enter name...'}
        />

        <select onChange={handleSelectAnimal}>
          <option value={''}>Select animal</option>
          <option value={'cat'}>Cat</option>
          <option value={'dog'}>Dog</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <div className={styles.container}>
        <div>
          <h2>Cats: </h2>
          {state?.cats?.map((cat, idx) => (
            <Cat key={cat.id} cat={cat} num={idx + 1} />
          ))}
        </div>

        <div>
          <h2>Dogs: </h2>
          {state?.dogs?.map((dog, idx) => (
            <Dog key={dog.id} dog={dog} num={idx + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};
