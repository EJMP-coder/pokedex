import React, {useEffect, useState} from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import axios from 'axios';

export default function Pokedex() {
   const [pokemonData, setpokemonData] = useState([])
  useEffect(() => {
   axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then((response) =>{
      if(response.status >= 1 && response.status <= 20) {
        const { results } = response.data
        let newPokemonData = []
        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id: index,
            url:'https://pokeapi.co/api/v2/pokemon' +index +'.png',
            name: pokemon.name
          }
          newPokemonData.push(pokemonObject);
        });
        setpokemonData(newPokemonData);
      }
   })

  },  []);
  return (
    <Box>
      {pokemonData ? pokemonData.map((pokemon) =>{
        return <h1>{pokemon.name}</h1>
      }): <CircularProgress/>}
    </Box>
  );
};
