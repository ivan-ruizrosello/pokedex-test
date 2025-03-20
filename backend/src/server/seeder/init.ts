import Pokemon from "../database/models/Pokemon";

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

const init =  async () => {
  try {
    for (let i = 1; i <= 152; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();

      await Pokemon.create({
        name: data.name,
        url: data.sprites.other["official-artwork"].front_default,
        weight: data.weight,
        height: data.height,
        number: data.order,
        health: (data.stats.find((stat: PokemonStat) => stat.stat.name === "hp") as PokemonStat).base_stat,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default init;