import { useReducer } from 'react';
import { createContext } from 'react';

import { ADD_CAT, ADD_DOG, DELETE_CAT, DELETE_DOG } from '../../actions';

const initialState = {
  dogs: [],
  cats: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_CAT: {
      return {
        ...state,
        cats: [...state.cats, { ...payload, id: new Date().getTime() }],
      };
    }

    case DELETE_CAT: {
      return {
        ...state,
        cats: state.cats.filter((cat) => cat.id !== payload.id),
      };
    }

    case ADD_DOG: {
      return {
        ...state,
        dogs: [...state.dogs, { ...payload, id: new Date().getTime() }],
      };
    }

    case DELETE_DOG: {
      return {
        ...state,
        dogs: state.dogs.filter((dog) => dog.id !== payload.id),
      };
    }

    default: {
      return state;
    }
  }
};

export const AnimalsContext = createContext({
  state: initialState,
  dispatch: () => {}
});

export const AnimalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <AnimalsContext.Provider value={value}>{children}</AnimalsContext.Provider>
  );
};
