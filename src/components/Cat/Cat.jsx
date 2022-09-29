import { useContext } from 'react';

import { DELETE_CAT } from '../../actions';
import { AnimalsContext } from '../../context';

export const Cat = ({ cat, num }) => {
  const { id, name } = cat;
  const { dispatch } = useContext(AnimalsContext);

  const handleRemove = () => {
    dispatch({ type: DELETE_CAT, payload: { id } });
  };

  return (
    <div>
      <h4>#{num} {name}</h4>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
