// Import necessary dependencies (you'll need to add these to your project)
import { Dispatch } from 'redux';
import { ActionType, Pokemon } from './PokemonReducer';

// Action creator for fetching Pokémons from the API
export const fetchPokemons = () => {
  return async (dispatch: Dispatch<ActionType>) => {
    try {
      // Dispatch request action to update loading state
      dispatch(fetchPokemonsRequest());
      
      // Make API call to your backend
      const response = await fetch('http://localhost:7768/pokemons');
      const data = await response.json();

      // On successful response, dispatch success action with the data
      dispatch(fetchPokemonsSuccess(data));
    } catch (error) {
      // On error, dispatch failure action with error message
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

// Add the missing action creator for failure
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
  
        dispatch(addPokemon(pokemon));
      }
      catch (error) {
        // Handle error
      }
    };
  };

const addPokemon = (pokemon: Pokemon) => ({
    type: 'ADD_POKEMON' as const,
    payload: pokemon
});