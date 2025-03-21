import { Response, Request } from "express";
import { z } from "zod";
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


const PokemonSchema = z.object({
  name: z.string().min(1, "Name is required"),
  height: z.number().positive("Height must be a positive number"),
  number: z.number().int("Number must be an integer").positive("Number must be positive"),
  health: z.number().int("Health must be an integer").positive("Health must be positive"),
  weight: z.number().positive("Weight must be a positive number"),
  url: z.string().url("URL must be a valid URL")
});

const createPokemon = async (req: Request, res: Response) => {
  try {
    const validationResult = PokemonSchema.safeParse(req.body);
    
    if (!validationResult.success) {
      return res.status(400).json({
        error: "Validation failed",
        details: validationResult.error.format()
      });
    }


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
