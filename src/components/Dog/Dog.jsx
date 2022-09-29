import { useContext } from 'react';

import { DELETE_DOG } from '../../actions';
import { AnimalsContext } from '../../context';

export const Dog = ({ dog, num }) => {
  const { id, name } = dog;
  const { dispatch } = useContext(AnimalsContext);

  const handleRemove = () => {
    dispatch({ type: DELETE_DOG, payload: { id } });
  };

  return (
    <div>
      <h4>#{num} {name}</h4>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
