import { useEffect, useState } from 'react';

import Flight from './Flight';
import { flightsService } from '../../services/flights.service';
import { screens } from '../../const/screens';

const Flights = ({ handleScreenChange }) => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    flightsService.getAll().then((res) => setFlights(res));
  }, []);

  if (flights.length === 0) return <h2>LOADING...</h2>;

  const excludeFlightsOfYear2020 = flights?.filter(
    (flight) => flight.launch_year !== 2020
  );

  return (
    <div>
      <button onClick={() => handleScreenChange(screens.CHOOSE_SCREEN)}>
        Go back
      </button>
      
      {excludeFlightsOfYear2020?.map((flight) => (
        <Flight flight={flight} />
      ))}
    </div>
  );
};

export default Flights;
