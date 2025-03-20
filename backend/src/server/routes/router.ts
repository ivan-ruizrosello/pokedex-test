import express from "express";

import { getAll } from "../controllers/PokemonController";

const router = express.Router();

router.get("/pokemons", getAll);

export default router;
