import { Dex } from "@data/types/Dex";
import { PokemonType } from "@data/types/PokemonType";

type Gen2Stat =
  | "HP"
  | "Attack"
  | "Defense"
  | "Sp. Attack"
  | "Sp. Defense"
  | "Speed";

type Gen2Type = Exclude<PokemonType, PokemonType.FAIRY>;

const dex: Dex<Gen2Stat, Gen2Type> = {
  dexName: "GSC",
  mons: [
    {
      name: "Bulbasaur",
      indexNumber: 1,
      stats: {
        HP: 45,
        Attack: 49,
        Defense: 49,
        "Sp. Attack": 65,
        "Sp. Defense": 65,
        Speed: 45,
      },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
  ],
};

export default dex;
