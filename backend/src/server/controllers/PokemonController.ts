import { Response, Request } from "express";
import Pokemon from "../database/models/Pokemon";

const getHeaviestPokemons = async (req: Request, res: Response) => {
  try {
    let limit = Number(req.query.limit);

    if (!limit) {
      limit = 25;
    }

    const pokemons = await Pokemon.findAll({
      limit,
      order: [["weight", "DESC"]],
    });

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

export { getHeaviestPokemons, createPokemon };
