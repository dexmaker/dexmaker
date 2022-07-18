import { Mon } from "./Mon";
import { PokemonType } from "./PokemonType";

export interface Dex<
  Stat extends string = string,
  MonType extends PokemonType = PokemonType
> {
  dexName: string;
  template: Mon<Stat, MonType>;
  mons: Mon<Stat, MonType>[];
}
