import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Character = ({ character }) => {
  const { id, name, status, species, gender, image } = character;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ID: {id}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Name: {name}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Species: {species}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Gender: {gender}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Character;
