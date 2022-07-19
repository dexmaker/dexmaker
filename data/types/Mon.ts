import { PokemonType } from "./PokemonType";

export interface Mon<
  Stat extends string = string,
  MonType extends PokemonType = PokemonType
> {
  name: string;
  indexNumber: number;
  stats: Record<Stat, number>;
  types: [MonType] | [MonType, MonType];
  spriteUrl?: string;
}
