import { useState, useEffect } from 'react';
import { Grid, Box } from '@mui/material';

import Character from './Character';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await res.json();
      setCharacters(results);
    })();
  }, []);

  return (
    <Box p={2} sx={{ maxWidth: 1000, margin: '0 auto' }}>
      <Grid container spacing={2}>
        {characters
          ?.filter((_, idx) => idx < 6)
          ?.map((character) => (
            <Grid key={character.id} item xs={6}>
              <Character character={character} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Characters;
