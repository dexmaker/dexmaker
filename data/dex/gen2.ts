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

const gen2dex: Dex<Gen2Stat, Gen2Type> = {
  dexName: "GSC",
  template: {
    name: "",
    indexNumber: 0,
    stats: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      "Sp. Attack": 0,
      "Sp. Defense": 0,
      Speed: 0,
    },
    types: [null, null],
  },
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

export default gen2dex;
