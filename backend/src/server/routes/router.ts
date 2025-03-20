import express from "express";

import { createPokemon, getAll } from "../controllers/PokemonController";

const router = express.Router();

router.get("/pokemons", getAll);
router.post("/pokemon", createPokemon);

export default router;
