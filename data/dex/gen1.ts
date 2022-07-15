import { Dex } from "@data/types/Dex";
import { PokemonType } from "@data/types/PokemonType";

type Gen1Stat = "HP" | "Attack" | "Defense" | "Special" | "Speed";

type Gen1Type = Exclude<
  PokemonType,
  PokemonType.FAIRY | PokemonType.STEEL | PokemonType.DARK
>;

const dex: Dex<Gen1Stat, Gen1Type> = {
  dexName: "RBY",
  mons: [
    {
      name: "Bulbasaur",
      indexNumber: 1,
      stats: { HP: 45, Attack: 49, Defense: 49, Special: 65, Speed: 45 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
  ],
};

export default dex;
