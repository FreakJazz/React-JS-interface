import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Popover, List, ListItem, ListItemText } from '@mui/material';
import { PokeApi } from '../../services/poke-api'

const PokeCard = ({ pokemonName }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    PokeApi(pokemonName).then(
    data => (setPokemonData(data)));
  }, [pokemonName]);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      sx={{ maxWidth: 200, margin: '1rem' }}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <CardMedia
        component="img"
        height="140"
        image={pokemonData?.sprites?.other.home.front_default}
        alt={pokemonName}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {pokemonData?.forms[0]?.name}
        </Typography>
      </CardContent>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List>
          <ListItem>
            <ListItemText primary={`ID: ${pokemonData?.id}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Altura: ${pokemonData?.height / 10} m`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Peso: ${pokemonData?.weight / 10} kg`} />
          </ListItem>
        </List>
      </Popover>
    </Card>
  );
};

export default PokeCard;