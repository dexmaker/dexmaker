import { Dex } from "@data/types/Dex";
import { PokemonType } from "@data/types/PokemonType";

type Gen1Stat = "HP" | "Attack" | "Defense" | "Special" | "Speed";

type Gen1Type = Exclude<
  PokemonType,
  PokemonType.FAIRY | PokemonType.STEEL | PokemonType.DARK
>;

const gen1dex: Dex<Gen1Stat, Gen1Type> = {
  dexName: "RBY",
  template: {
    name: "",
    indexNumber: 0,
    stats: { HP: 0, Attack: 0, Defense: 0, Special: 0, Speed: 0 },
    types: [null, null],
  },
  mons: [
    {
      name: "Bulbasaur",
      indexNumber: 1,
      stats: { HP: 45, Attack: 49, Defense: 49, Special: 65, Speed: 45 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      name: "Snorlax",
      indexNumber: 143,
      stats: { HP: 160, Attack: 110, Defense: 65, Special: 65, Speed: 30 },
      types: [PokemonType.NORMAL],
    },
    {
      name: "Mewtwo",
      indexNumber: 150,
      stats: { HP: 106, Attack: 110, Defense: 90, Special: 154, Speed: 130 },
      types: [PokemonType.PSYCHIC],
    },
  ],
};

export default gen1dex;
