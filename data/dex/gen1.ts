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
      indexNumber: 1,
      name: "Bulbasaur",
      stats: { HP: 45, Attack: 49, Defense: 49, Speed: 45, Special: 65 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 2,
      name: "Ivysaur",
      stats: { HP: 60, Attack: 62, Defense: 63, Speed: 60, Special: 80 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 3,
      name: "Venusaur",
      stats: { HP: 80, Attack: 82, Defense: 83, Speed: 80, Special: 100 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 4,
      name: "Charmander",
      stats: { HP: 39, Attack: 52, Defense: 43, Speed: 65, Special: 50 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 5,
      name: "Charmeleon",
      stats: { HP: 58, Attack: 64, Defense: 58, Speed: 80, Special: 65 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 6,
      name: "Charizard",
      stats: { HP: 78, Attack: 84, Defense: 78, Speed: 100, Special: 85 },
      types: [PokemonType.FIRE, PokemonType.FLYING],
    },
    {
      indexNumber: 7,
      name: "Squirtle",
      stats: { HP: 44, Attack: 48, Defense: 65, Speed: 43, Special: 50 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 8,
      name: "Wartortle",
      stats: { HP: 59, Attack: 63, Defense: 80, Speed: 58, Special: 65 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 9,
      name: "Blastoise",
      stats: { HP: 79, Attack: 83, Defense: 100, Speed: 78, Special: 85 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 10,
      name: "Caterpie",
      stats: { HP: 45, Attack: 30, Defense: 35, Speed: 45, Special: 20 },
      types: [PokemonType.BUG],
    },
    {
      indexNumber: 11,
      name: "Metapod",
      stats: { HP: 50, Attack: 20, Defense: 55, Speed: 30, Special: 25 },
      types: [PokemonType.BUG],
    },
    {
      indexNumber: 12,
      name: "Butterfree",
      stats: { HP: 60, Attack: 45, Defense: 50, Speed: 70, Special: 80 },
      types: [PokemonType.BUG, PokemonType.FLYING],
    },
    {
      indexNumber: 13,
      name: "Weedle",
      stats: { HP: 40, Attack: 35, Defense: 30, Speed: 50, Special: 20 },
      types: [PokemonType.BUG, PokemonType.POISON],
    },
    {
      indexNumber: 14,
      name: "Kakuna",
      stats: { HP: 45, Attack: 25, Defense: 50, Speed: 35, Special: 25 },
      types: [PokemonType.BUG, PokemonType.POISON],
    },
    {
      indexNumber: 15,
      name: "Beedrill",
      stats: { HP: 65, Attack: 80, Defense: 40, Speed: 75, Special: 45 },
      types: [PokemonType.BUG, PokemonType.POISON],
    },
    {
      indexNumber: 16,
      name: "Pidgey",
      stats: { HP: 40, Attack: 45, Defense: 40, Speed: 56, Special: 35 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 17,
      name: "Pidgeotto",
      stats: { HP: 63, Attack: 60, Defense: 55, Speed: 71, Special: 50 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 18,
      name: "Pidgeot",
      stats: { HP: 83, Attack: 80, Defense: 75, Speed: 91, Special: 70 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 19,
      name: "Rattata",
      stats: { HP: 30, Attack: 56, Defense: 35, Speed: 72, Special: 25 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 20,
      name: "Raticate",
      stats: { HP: 55, Attack: 81, Defense: 60, Speed: 97, Special: 50 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 21,
      name: "Spearow",
      stats: { HP: 40, Attack: 60, Defense: 30, Speed: 70, Special: 31 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 22,
      name: "Fearow",
      stats: { HP: 65, Attack: 90, Defense: 65, Speed: 100, Special: 61 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 23,
      name: "Ekans",
      stats: { HP: 35, Attack: 60, Defense: 44, Speed: 55, Special: 40 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 24,
      name: "Arbok",
      stats: { HP: 60, Attack: 85, Defense: 69, Speed: 80, Special: 65 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 25,
      name: "Pikachu",
      stats: { HP: 35, Attack: 55, Defense: 30, Speed: 90, Special: 50 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 26,
      name: "Raichu",
      stats: { HP: 60, Attack: 90, Defense: 55, Speed: 100, Special: 90 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 27,
      name: "Sandshrew",
      stats: { HP: 50, Attack: 75, Defense: 85, Speed: 40, Special: 30 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 28,
      name: "Sandslash",
      stats: { HP: 75, Attack: 100, Defense: 110, Speed: 65, Special: 55 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 29,
      name: "Nidoran♀",
      stats: { HP: 55, Attack: 47, Defense: 52, Speed: 41, Special: 40 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 30,
      name: "Nidorina",
      stats: { HP: 70, Attack: 62, Defense: 67, Speed: 56, Special: 55 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 31,
      name: "Nidoqueen",
      stats: { HP: 90, Attack: 82, Defense: 87, Speed: 76, Special: 75 },
      types: [PokemonType.POISON, PokemonType.GROUND],
    },
    {
      indexNumber: 32,
      name: "Nidoran♂",
      stats: { HP: 46, Attack: 57, Defense: 40, Speed: 50, Special: 40 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 33,
      name: "Nidorino",
      stats: { HP: 61, Attack: 72, Defense: 57, Speed: 65, Special: 55 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 34,
      name: "Nidoking",
      stats: { HP: 81, Attack: 92, Defense: 77, Speed: 85, Special: 75 },
      types: [PokemonType.POISON, PokemonType.GROUND],
    },
    {
      indexNumber: 35,
      name: "Clefairy",
      stats: { HP: 70, Attack: 45, Defense: 48, Speed: 35, Special: 60 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 36,
      name: "Clefable",
      stats: { HP: 95, Attack: 70, Defense: 73, Speed: 60, Special: 85 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 37,
      name: "Vulpix",
      stats: { HP: 38, Attack: 41, Defense: 40, Speed: 65, Special: 65 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 38,
      name: "Ninetales",
      stats: { HP: 73, Attack: 76, Defense: 75, Speed: 100, Special: 100 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 39,
      name: "Jigglypuff",
      stats: { HP: 115, Attack: 45, Defense: 20, Speed: 20, Special: 25 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 40,
      name: "Wigglytuff",
      stats: { HP: 140, Attack: 70, Defense: 45, Speed: 45, Special: 50 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 41,
      name: "Zubat",
      stats: { HP: 40, Attack: 45, Defense: 35, Speed: 55, Special: 40 },
      types: [PokemonType.POISON, PokemonType.FLYING],
    },
    {
      indexNumber: 42,
      name: "Golbat",
      stats: { HP: 75, Attack: 80, Defense: 70, Speed: 90, Special: 75 },
      types: [PokemonType.POISON, PokemonType.FLYING],
    },
    {
      indexNumber: 43,
      name: "Oddish",
      stats: { HP: 45, Attack: 50, Defense: 55, Speed: 30, Special: 75 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 44,
      name: "Gloom",
      stats: { HP: 60, Attack: 65, Defense: 70, Speed: 40, Special: 85 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 45,
      name: "Vileplume",
      stats: { HP: 75, Attack: 80, Defense: 85, Speed: 50, Special: 100 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 46,
      name: "Paras",
      stats: { HP: 35, Attack: 70, Defense: 55, Speed: 25, Special: 55 },
      types: [PokemonType.BUG, PokemonType.GRASS],
    },
    {
      indexNumber: 47,
      name: "Parasect",
      stats: { HP: 60, Attack: 95, Defense: 80, Speed: 30, Special: 80 },
      types: [PokemonType.BUG, PokemonType.GRASS],
    },
    {
      indexNumber: 48,
      name: "Venonat",
      stats: { HP: 60, Attack: 55, Defense: 50, Speed: 45, Special: 40 },
      types: [PokemonType.BUG, PokemonType.POISON],
    },
    {
      indexNumber: 49,
      name: "Venomoth",
      stats: { HP: 70, Attack: 65, Defense: 60, Speed: 90, Special: 90 },
      types: [PokemonType.BUG, PokemonType.POISON],
    },
    {
      indexNumber: 50,
      name: "Diglett",
      stats: { HP: 10, Attack: 55, Defense: 25, Speed: 95, Special: 45 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 51,
      name: "Dugtrio",
      stats: { HP: 35, Attack: 80, Defense: 50, Speed: 120, Special: 70 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 52,
      name: "Meowth",
      stats: { HP: 40, Attack: 45, Defense: 35, Speed: 90, Special: 40 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 53,
      name: "Persian",
      stats: { HP: 65, Attack: 70, Defense: 60, Speed: 115, Special: 65 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 54,
      name: "Psyduck",
      stats: { HP: 50, Attack: 52, Defense: 48, Speed: 55, Special: 50 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 55,
      name: "Golduck",
      stats: { HP: 80, Attack: 82, Defense: 78, Speed: 85, Special: 80 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 56,
      name: "Mankey",
      stats: { HP: 40, Attack: 80, Defense: 35, Speed: 70, Special: 35 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 57,
      name: "Primeape",
      stats: { HP: 65, Attack: 105, Defense: 60, Speed: 95, Special: 60 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 58,
      name: "Growlithe",
      stats: { HP: 55, Attack: 70, Defense: 45, Speed: 60, Special: 50 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 59,
      name: "Arcanine",
      stats: { HP: 90, Attack: 110, Defense: 80, Speed: 95, Special: 80 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 60,
      name: "Poliwag",
      stats: { HP: 40, Attack: 50, Defense: 40, Speed: 90, Special: 40 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 61,
      name: "Poliwhirl",
      stats: { HP: 65, Attack: 65, Defense: 65, Speed: 90, Special: 50 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 62,
      name: "Poliwrath",
      stats: { HP: 90, Attack: 85, Defense: 95, Speed: 70, Special: 70 },
      types: [PokemonType.WATER, PokemonType.FIGHTING],
    },
    {
      indexNumber: 63,
      name: "Abra",
      stats: { HP: 25, Attack: 20, Defense: 15, Speed: 90, Special: 105 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 64,
      name: "Kadabra",
      stats: { HP: 40, Attack: 35, Defense: 30, Speed: 105, Special: 120 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 65,
      name: "Alakazam",
      stats: { HP: 55, Attack: 50, Defense: 45, Speed: 120, Special: 135 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 66,
      name: "Machop",
      stats: { HP: 70, Attack: 80, Defense: 50, Speed: 35, Special: 35 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 67,
      name: "Machoke",
      stats: { HP: 80, Attack: 100, Defense: 70, Speed: 45, Special: 50 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 68,
      name: "Machamp",
      stats: { HP: 90, Attack: 130, Defense: 80, Speed: 55, Special: 65 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 69,
      name: "Bellsprout",
      stats: { HP: 50, Attack: 75, Defense: 35, Speed: 40, Special: 70 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 70,
      name: "Weepinbell",
      stats: { HP: 65, Attack: 90, Defense: 50, Speed: 55, Special: 85 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 71,
      name: "Victreebel",
      stats: { HP: 80, Attack: 105, Defense: 65, Speed: 70, Special: 100 },
      types: [PokemonType.GRASS, PokemonType.POISON],
    },
    {
      indexNumber: 72,
      name: "Tentacool",
      stats: { HP: 40, Attack: 40, Defense: 35, Speed: 70, Special: 100 },
      types: [PokemonType.WATER, PokemonType.POISON],
    },
    {
      indexNumber: 73,
      name: "Tentacruel",
      stats: { HP: 80, Attack: 70, Defense: 65, Speed: 100, Special: 120 },
      types: [PokemonType.WATER, PokemonType.POISON],
    },
    {
      indexNumber: 74,
      name: "Geodude",
      stats: { HP: 40, Attack: 80, Defense: 100, Speed: 20, Special: 30 },
      types: [PokemonType.ROCK, PokemonType.GROUND],
    },
    {
      indexNumber: 75,
      name: "Graveler",
      stats: { HP: 55, Attack: 95, Defense: 115, Speed: 35, Special: 45 },
      types: [PokemonType.ROCK, PokemonType.GROUND],
    },
    {
      indexNumber: 76,
      name: "Golem",
      stats: { HP: 80, Attack: 110, Defense: 130, Speed: 45, Special: 55 },
      types: [PokemonType.ROCK, PokemonType.GROUND],
    },
    {
      indexNumber: 77,
      name: "Ponyta",
      stats: { HP: 50, Attack: 85, Defense: 55, Speed: 90, Special: 65 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 78,
      name: "Rapidash",
      stats: { HP: 65, Attack: 100, Defense: 70, Speed: 105, Special: 80 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 79,
      name: "Slowpoke",
      stats: { HP: 90, Attack: 65, Defense: 65, Speed: 15, Special: 40 },
      types: [PokemonType.WATER, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 80,
      name: "Slowbro",
      stats: { HP: 95, Attack: 75, Defense: 110, Speed: 30, Special: 80 },
      types: [PokemonType.WATER, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 81,
      name: "Magnemite",
      stats: { HP: 25, Attack: 35, Defense: 70, Speed: 45, Special: 95 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 82,
      name: "Magneton",
      stats: { HP: 50, Attack: 60, Defense: 95, Speed: 70, Special: 120 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 83,
      name: "Farfetch'd",
      stats: { HP: 52, Attack: 65, Defense: 55, Speed: 60, Special: 58 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 84,
      name: "Doduo",
      stats: { HP: 35, Attack: 85, Defense: 45, Speed: 75, Special: 35 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 85,
      name: "Dodrio",
      stats: { HP: 60, Attack: 110, Defense: 70, Speed: 100, Special: 60 },
      types: [PokemonType.NORMAL, PokemonType.FLYING],
    },
    {
      indexNumber: 86,
      name: "Seel",
      stats: { HP: 65, Attack: 45, Defense: 55, Speed: 45, Special: 70 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 87,
      name: "Dewgong",
      stats: { HP: 90, Attack: 70, Defense: 80, Speed: 70, Special: 95 },
      types: [PokemonType.WATER, PokemonType.ICE],
    },
    {
      indexNumber: 88,
      name: "Grimer",
      stats: { HP: 80, Attack: 80, Defense: 50, Speed: 25, Special: 40 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 89,
      name: "Muk",
      stats: { HP: 105, Attack: 105, Defense: 75, Speed: 50, Special: 65 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 90,
      name: "Shellder",
      stats: { HP: 30, Attack: 65, Defense: 100, Speed: 40, Special: 45 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 91,
      name: "Cloyster",
      stats: { HP: 50, Attack: 95, Defense: 180, Speed: 70, Special: 85 },
      types: [PokemonType.WATER, PokemonType.ICE],
    },
    {
      indexNumber: 92,
      name: "Gastly",
      stats: { HP: 30, Attack: 35, Defense: 30, Speed: 80, Special: 100 },
      types: [PokemonType.GHOST, PokemonType.POISON],
    },
    {
      indexNumber: 93,
      name: "Haunter",
      stats: { HP: 45, Attack: 50, Defense: 45, Speed: 95, Special: 115 },
      types: [PokemonType.GHOST, PokemonType.POISON],
    },
    {
      indexNumber: 94,
      name: "Gengar",
      stats: { HP: 60, Attack: 65, Defense: 60, Speed: 110, Special: 130 },
      types: [PokemonType.GHOST, PokemonType.POISON],
    },
    {
      indexNumber: 95,
      name: "Onix",
      stats: { HP: 35, Attack: 45, Defense: 160, Speed: 70, Special: 30 },
      types: [PokemonType.ROCK, PokemonType.GROUND],
    },
    {
      indexNumber: 96,
      name: "Drowzee",
      stats: { HP: 60, Attack: 48, Defense: 45, Speed: 42, Special: 90 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 97,
      name: "Hypno",
      stats: { HP: 85, Attack: 73, Defense: 70, Speed: 67, Special: 115 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 98,
      name: "Krabby",
      stats: { HP: 30, Attack: 105, Defense: 90, Speed: 50, Special: 25 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 99,
      name: "Kingler",
      stats: { HP: 55, Attack: 130, Defense: 115, Speed: 75, Special: 50 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 100,
      name: "Voltorb",
      stats: { HP: 40, Attack: 30, Defense: 50, Speed: 100, Special: 55 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 101,
      name: "Electrode",
      stats: { HP: 60, Attack: 50, Defense: 70, Speed: 140, Special: 80 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 102,
      name: "Exeggcute",
      stats: { HP: 60, Attack: 40, Defense: 80, Speed: 40, Special: 60 },
      types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 103,
      name: "Exeggutor",
      stats: { HP: 95, Attack: 95, Defense: 85, Speed: 55, Special: 125 },
      types: [PokemonType.GRASS, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 104,
      name: "Cubone",
      stats: { HP: 50, Attack: 50, Defense: 95, Speed: 35, Special: 40 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 105,
      name: "Marowak",
      stats: { HP: 60, Attack: 80, Defense: 110, Speed: 45, Special: 50 },
      types: [PokemonType.GROUND],
    },
    {
      indexNumber: 106,
      name: "Hitmonlee",
      stats: { HP: 50, Attack: 120, Defense: 53, Speed: 87, Special: 35 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 107,
      name: "Hitmonchan",
      stats: { HP: 50, Attack: 105, Defense: 79, Speed: 76, Special: 35 },
      types: [PokemonType.FIGHTING],
    },
    {
      indexNumber: 108,
      name: "Lickitung",
      stats: { HP: 90, Attack: 55, Defense: 75, Speed: 30, Special: 60 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 109,
      name: "Koffing",
      stats: { HP: 40, Attack: 65, Defense: 95, Speed: 35, Special: 60 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 110,
      name: "Weezing",
      stats: { HP: 65, Attack: 90, Defense: 120, Speed: 60, Special: 85 },
      types: [PokemonType.POISON],
    },
    {
      indexNumber: 111,
      name: "Rhyhorn",
      stats: { HP: 80, Attack: 85, Defense: 95, Speed: 25, Special: 30 },
      types: [PokemonType.GROUND, PokemonType.ROCK],
    },
    {
      indexNumber: 112,
      name: "Rhydon",
      stats: { HP: 105, Attack: 130, Defense: 120, Speed: 40, Special: 45 },
      types: [PokemonType.GROUND, PokemonType.ROCK],
    },
    {
      indexNumber: 113,
      name: "Chansey",
      stats: { HP: 250, Attack: 5, Defense: 5, Speed: 50, Special: 105 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 114,
      name: "Tangela",
      stats: { HP: 65, Attack: 55, Defense: 115, Speed: 60, Special: 100 },
      types: [PokemonType.GRASS],
    },
    {
      indexNumber: 115,
      name: "Kangaskhan",
      stats: { HP: 105, Attack: 95, Defense: 80, Speed: 90, Special: 40 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 116,
      name: "Horsea",
      stats: { HP: 30, Attack: 40, Defense: 70, Speed: 60, Special: 70 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 117,
      name: "Seadra",
      stats: { HP: 55, Attack: 65, Defense: 95, Speed: 85, Special: 95 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 118,
      name: "Goldeen",
      stats: { HP: 45, Attack: 67, Defense: 60, Speed: 63, Special: 50 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 119,
      name: "Seaking",
      stats: { HP: 80, Attack: 92, Defense: 65, Speed: 68, Special: 80 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 120,
      name: "Staryu",
      stats: { HP: 30, Attack: 45, Defense: 55, Speed: 85, Special: 70 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 121,
      name: "Starmie",
      stats: { HP: 60, Attack: 75, Defense: 85, Speed: 115, Special: 100 },
      types: [PokemonType.WATER, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 122,
      name: "Mr. Mime",
      stats: { HP: 40, Attack: 45, Defense: 65, Speed: 90, Special: 100 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 123,
      name: "Scyther",
      stats: { HP: 70, Attack: 110, Defense: 80, Speed: 105, Special: 55 },
      types: [PokemonType.BUG, PokemonType.FLYING],
    },
    {
      indexNumber: 124,
      name: "Jynx",
      stats: { HP: 65, Attack: 50, Defense: 35, Speed: 95, Special: 95 },
      types: [PokemonType.ICE, PokemonType.PSYCHIC],
    },
    {
      indexNumber: 125,
      name: "Electabuzz",
      stats: { HP: 65, Attack: 83, Defense: 57, Speed: 105, Special: 85 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 126,
      name: "Magmar",
      stats: { HP: 65, Attack: 95, Defense: 57, Speed: 93, Special: 85 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 127,
      name: "Pinsir",
      stats: { HP: 65, Attack: 125, Defense: 100, Speed: 85, Special: 55 },
      types: [PokemonType.BUG],
    },
    {
      indexNumber: 128,
      name: "Tauros",
      stats: { HP: 75, Attack: 100, Defense: 95, Speed: 110, Special: 70 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 129,
      name: "Magikarp",
      stats: { HP: 20, Attack: 10, Defense: 55, Speed: 80, Special: 20 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 130,
      name: "Gyarados",
      stats: { HP: 95, Attack: 125, Defense: 79, Speed: 81, Special: 100 },
      types: [PokemonType.WATER, PokemonType.FLYING],
    },
    {
      indexNumber: 131,
      name: "Lapras",
      stats: { HP: 130, Attack: 85, Defense: 80, Speed: 60, Special: 95 },
      types: [PokemonType.WATER, PokemonType.ICE],
    },
    {
      indexNumber: 132,
      name: "Ditto",
      stats: { HP: 48, Attack: 48, Defense: 48, Speed: 48, Special: 48 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 133,
      name: "Eevee",
      stats: { HP: 55, Attack: 55, Defense: 50, Speed: 55, Special: 65 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 134,
      name: "Vaporeon",
      stats: { HP: 130, Attack: 65, Defense: 60, Speed: 65, Special: 110 },
      types: [PokemonType.WATER],
    },
    {
      indexNumber: 135,
      name: "Jolteon",
      stats: { HP: 65, Attack: 65, Defense: 60, Speed: 130, Special: 110 },
      types: [PokemonType.ELECTRIC],
    },
    {
      indexNumber: 136,
      name: "Flareon",
      stats: { HP: 65, Attack: 130, Defense: 60, Speed: 65, Special: 110 },
      types: [PokemonType.FIRE],
    },
    {
      indexNumber: 137,
      name: "Porygon",
      stats: { HP: 65, Attack: 60, Defense: 70, Speed: 40, Special: 75 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 138,
      name: "Omanyte",
      stats: { HP: 35, Attack: 40, Defense: 100, Speed: 35, Special: 90 },
      types: [PokemonType.ROCK, PokemonType.WATER],
    },
    {
      indexNumber: 139,
      name: "Omastar",
      stats: { HP: 70, Attack: 60, Defense: 125, Speed: 55, Special: 115 },
      types: [PokemonType.ROCK, PokemonType.WATER],
    },
    {
      indexNumber: 140,
      name: "Kabuto",
      stats: { HP: 30, Attack: 80, Defense: 90, Speed: 55, Special: 45 },
      types: [PokemonType.ROCK, PokemonType.WATER],
    },
    {
      indexNumber: 141,
      name: "Kabutops",
      stats: { HP: 60, Attack: 115, Defense: 105, Speed: 80, Special: 70 },
      types: [PokemonType.ROCK, PokemonType.WATER],
    },
    {
      indexNumber: 142,
      name: "Aerodactyl",
      stats: { HP: 80, Attack: 105, Defense: 65, Speed: 130, Special: 60 },
      types: [PokemonType.ROCK, PokemonType.FLYING],
    },
    {
      indexNumber: 143,
      name: "Snorlax",
      stats: { HP: 160, Attack: 110, Defense: 65, Speed: 30, Special: 65 },
      types: [PokemonType.NORMAL],
    },
    {
      indexNumber: 144,
      name: "Articuno",
      stats: { HP: 90, Attack: 85, Defense: 100, Speed: 85, Special: 125 },
      types: [PokemonType.ICE, PokemonType.FLYING],
    },
    {
      indexNumber: 145,
      name: "Zapdos",
      stats: { HP: 90, Attack: 90, Defense: 85, Speed: 100, Special: 125 },
      types: [PokemonType.ELECTRIC, PokemonType.FLYING],
    },
    {
      indexNumber: 146,
      name: "Moltres",
      stats: { HP: 90, Attack: 100, Defense: 90, Speed: 90, Special: 125 },
      types: [PokemonType.FIRE, PokemonType.FLYING],
    },
    {
      indexNumber: 147,
      name: "Dratini",
      stats: { HP: 41, Attack: 64, Defense: 45, Speed: 50, Special: 50 },
      types: [PokemonType.DRAGON],
    },
    {
      indexNumber: 148,
      name: "Dragonair",
      stats: { HP: 61, Attack: 84, Defense: 65, Speed: 70, Special: 70 },
      types: [PokemonType.DRAGON],
    },
    {
      indexNumber: 149,
      name: "Dragonite",
      stats: { HP: 91, Attack: 134, Defense: 95, Speed: 80, Special: 100 },
      types: [PokemonType.DRAGON, PokemonType.FLYING],
    },
    {
      indexNumber: 150,
      name: "Mewtwo",
      stats: { HP: 106, Attack: 110, Defense: 90, Speed: 130, Special: 154 },
      types: [PokemonType.PSYCHIC],
    },
    {
      indexNumber: 151,
      name: "Mew",
      stats: { HP: 100, Attack: 100, Defense: 100, Speed: 100, Special: 100 },
      types: [PokemonType.PSYCHIC],
    },
  ],
};

export default gen1dex;