import React, {useEffect, useState} from 'react';
import { Box, CircularProgress, Grid } from '@material-ui/core';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import {  Pokemon_Api_Url } from '../config';
 

 const Pokedex = ()  => {
   const [pokemonData, setpokemonData] = useState(null)
 useEffect(() => {
    axios.get(Pokemon_Api_Url).then((response) =>{
      
    
      if (response.status === 200) {
  const { results } = response.data;
  let newPokemonData = [];
    const fetchPokemonData = results.map((pokemon) => {
    return axios.get(pokemon.url).then((response) => {
      const pokemonData = response.data;
    
          
      return pokemonData;
    });
  });

  Promise.all(fetchPokemonData)
    .then((pokemonDataArray) => {
      newPokemonData = pokemonDataArray.map((pokemonData, index) => ({
        id: index,
        url: pokemonData.sprites.front_default,
        name: pokemonData.name,
        ability: pokemonData.abilities
      }));

      setpokemonData(newPokemonData);
     
    })
    .catch((error) => {
      console.log('Error fetching Pokemon data:', error);
    });
} else {
  console.log('Error');
}

   })

  },  []);
  return (
    <Box>
      {pokemonData ? (
      <Grid container spacing={2} style={{marginTop:100}}>
      {pokemonData.map((pokemon) => {
        return (
          
          <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.url}/>
        )

      })}
      </Grid>
     ) : (<CircularProgress style={{margin: 100}}/>
     )}
    </Box>
  )
};
export default Pokedex;