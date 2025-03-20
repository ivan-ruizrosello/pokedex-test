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

export { getAll };
