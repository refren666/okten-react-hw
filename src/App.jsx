import { useState } from 'react';

import ChooseCategory from './components/ChooseCategory/ChooseCategory';
import Flights from './components/Flights/Flights';
import Users from './components/Users/Users';
import { screens } from './const/screens';

const App = () => {
  const [screen, setScreen] = useState(screens.CHOOSE_SCREEN);

  const handleScreenChange = (screen) => {
    setScreen(screen);
  };

  return (
    <>
      {screen === screens.CHOOSE_SCREEN && (
        <ChooseCategory handleScreenChange={handleScreenChange} />
      )}
      {screen === screens.USERS_SCREEN && (
        <Users handleScreenChange={handleScreenChange} />
      )}
      {screen === screens.FLIGHTS_SCREEN && (
        <Flights handleScreenChange={handleScreenChange} />
      )}
    </>
  );
};

export default App;
