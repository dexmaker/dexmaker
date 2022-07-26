import { dexes } from '@data/presets';
import { Dex, ListQueryResult } from '@data/types';

export const getDexes = (): ListQueryResult<Dex> => {
  return { count: dexes.length, data: dexes };
};
