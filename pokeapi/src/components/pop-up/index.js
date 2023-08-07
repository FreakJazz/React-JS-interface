import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { PokeApi } from "../../services/poke-api";

export const PopupPokemon = ({ pokemonNumber }) => {
  const [pokemonData1, setPokemonData1] = useState(null);
  const [pokemonData2, setPokemonData2] = useState(null);

  const pokemonNumber1 = pokemonNumber + 1;
  const pokemonNumber2 = pokemonNumber + 2;
  useEffect(() => {
    PokeApi(pokemonNumber1).then((data) => setPokemonData1(data));
    PokeApi(pokemonNumber2).then((data) => setPokemonData2(data));
  }, [pokemonNumber1, pokemonNumber2]);

  return (
    <Card
      sx={{ width: "auto", margin: "1rem", display: 'flex', flexWrap: 'column' }}
    //   onMouseEnter={handlePopoverOpen}
    //   onMouseLeave={handlePopoverClose}
    >
      <Card>
        <CardMedia
          component="img"
          sx={{ width: '200px', height: 'auto', objectFit: 'cover', cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', }}
          image={pokemonData1?.sprites?.other.home.front_default}
          alt={pokemonNumber1}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {pokemonData1?.forms[0]?.name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {`Altura: ${pokemonData1?.height / 10} m`}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {`Peso: ${pokemonData1?.weight / 10} kg`}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardMedia
          component="img"
          sx={{ width: '200px', height: 'auto', objectFit: 'cover', cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center', }}
          image={pokemonData2?.sprites?.other.home.front_default}
          alt={pokemonNumber2}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {pokemonData2?.forms[0]?.name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {`Altura: ${pokemonData2?.height / 10} m`}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            {`Peso: ${pokemonData2?.weight / 10} kg`}
          </Typography>
        </CardContent>
      </Card>
    </Card>
  );
};
