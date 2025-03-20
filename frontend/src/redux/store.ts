import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './PokemonReducer';
import thunk from 'redux-thunk';
import { fetchPokemons } from './actions'

const appStore = configureStore({
    reducer: {
        pokemon: pokemonReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    devTools: true,
});

appStore.dispatch(fetchPokemons());
export type AppDispatch = typeof appStore.dispatch
export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
