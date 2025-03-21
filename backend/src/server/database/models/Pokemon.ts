import { DataTypes } from "sequelize";
import { z } from "zod";
import { db } from "../../config/db";

export const PokemonModel = db.define(
  "pokemon",
  {
    name: { type: DataTypes.STRING, allowNull: false },
    height: { type: DataTypes.FLOAT, allowNull: false },
    number: { type: DataTypes.INTEGER, allowNull: false },
    health: { type: DataTypes.INTEGER, allowNull: false },
    weight: { type: DataTypes.FLOAT, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
  },
  { hooks: {} }
);


export const PokemonSchema = z.object({
  name: z.string().min(1, "Name is required"),
  height: z.number().positive("Height must be a positive number"),
  number: z.number().int("Number must be an integer").positive("Number must be positive"),
  health: z.number().int("Health must be an integer").positive("Health must be positive"),
  weight: z.number().positive("Weight must be a positive number"),
  url: z.string().url("URL must be a valid URL")
});


export default PokemonModel;
