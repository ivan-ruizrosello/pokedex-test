import { Response, Request } from "express";
import Pokemon from "../database/models/Pokemon";

const getAll = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.findAll();

    return res.json(pokemons);
  } catch (error) {
    console.log(error);
  }
};


const createPokemon = async (req: Request, res: Response) => {
  try {
    const { name, height, number, health, weight, url } = req.body;

    const newPokemon = await Pokemon.create({
      name,
      height,
      number,
      health,
      weight,
      url,
    });

    return res.status(201).json(newPokemon);
  } catch (error) {
    console.log(error);
  }
}

export { getAll, createPokemon };
