import express from "express";

import { createPokemon, getHeaviestPokemons } from "../controllers/PokemonController";

const router = express.Router();

router.get("/pokemons/heaviest", getHeaviestPokemons);
router.post("/pokemon", createPokemon);

export default router;
