import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Popover, List, ListItem, ListItemText } from '@mui/material';

const PokeCard = ({ pokemonName }) => {
  console.log(pokemonName)
  const [anchorEl, setAnchorEl] = useState(null);

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    // URL de la API que deseas consultar
    const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'+pokemonName;

    // Realizar la solicitud GET con Axios
    axios.get(apiUrl)
      .then(response => {
        // Aquí puedes manejar los datos de respuesta
        setPokemonData(response.data);
      })
      .catch(error => {
        // Aquí puedes manejar los errores en caso de que ocurran
        console.error(error);
      });
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
        image={pokemonData?.sprites?.front_default}
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