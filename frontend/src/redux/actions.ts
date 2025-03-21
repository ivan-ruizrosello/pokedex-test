import { Dispatch } from 'redux';
import { ActionType, Pokemon } from './PokemonReducer';


export const fetchPokemons = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      dispatch(fetchPokemonsRequest());
      
      const response = await fetch('http://localhost:7768/pokemons/heaviest?limit=25');
      const data = await response.json();


      dispatch(fetchPokemonsSuccess(data));
    } catch (error) {
      let errorMessage = 'Failed to fetch Pokémons';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(fetchPokemonsFailure(errorMessage));
    }
  };
};

const fetchPokemonsRequest = () => ({
    type: 'FETCH_POKEMONS_REQUEST' as const
});

const fetchPokemonsSuccess = (pokemons: Pokemon[]) => ({
  type: 'FETCH_POKEMONS_SUCCESS' as const,
  payload: pokemons
});

const fetchPokemonsFailure = (errorMessage: string) => ({
  type: 'FETCH_POKEMONS_FAILURE' as const,
  payload: errorMessage
});


export const createPokemon = (pokemon: Pokemon) => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      await fetch('http://localhost:7768/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
      });

      await fetchPokemons()(dispatch);
    }
    catch (error) {
      // Handle error
    }
  };
};