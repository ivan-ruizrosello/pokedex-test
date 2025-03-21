interface Pokemon {
    name: string;
    height: number;
    number: number;
    health: number;
    weight: number;
    url: string;
  }
  
  // Define the state shape
  interface PokemonState {
    pokemons: Pokemon[];
    isLoading: boolean;
    error: string | null;
  }
  
  // Define action types
  type ActionType = 
    | { type: 'FETCH_POKEMONS_REQUEST' }
    | { type: 'FETCH_POKEMONS_SUCCESS'; payload: Pokemon[] }
    | { type: 'FETCH_POKEMONS_FAILURE'; payload: string }
  
  // Initial state
  const initialState: PokemonState = {
    pokemons: [],
    isLoading: false,
    error: null
  };

  const pokemonReducer = (state: PokemonState = initialState, action: ActionType): PokemonState => {
    switch (action.type) {
      case 'FETCH_POKEMONS_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null
        };
      
      case 'FETCH_POKEMONS_SUCCESS':
        return {
          ...state,
          pokemons: action.payload,
          isLoading: false
        };
      
      case 'FETCH_POKEMONS_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
      
      default:
        return state;
    }
  };

  export { pokemonReducer, initialState };
  export type { Pokemon, PokemonState, ActionType };