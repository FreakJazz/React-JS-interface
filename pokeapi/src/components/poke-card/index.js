import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Popover } from '@mui/material';
import { PokeApi } from '../../services/poke-api'
import {PopupPokemon} from '../pop-up'
const PokeCard = ({ pokemonName }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    PokeApi(pokemonName).then(
    data => (setPokemonData(data)));
  }, [pokemonName]);

  const handlePopoverOpen = (event) => {
    console.log("entro al open");
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    console.log("entro al close");
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Card
      sx={{ width: "auto", margin: '1rem' }}
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <CardMedia
        component="img"
        sx={{ width: '200px', height: 'auto', objectFit: 'cover', cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', }}
        image={pokemonData?.sprites?.other.home.front_default}
        alt={pokemonName}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {pokemonData?.forms[0]?.name}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {`Altura: ${pokemonData?.height / 10} m`}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {`Peso: ${pokemonData?.weight / 10} kg`}
        </Typography>
      </CardContent>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        
      >
        <PopupPokemon pokemonNumber={pokemonData?.id} />
          
      </Popover>
    </Card>
  );
};

export default PokeCard;