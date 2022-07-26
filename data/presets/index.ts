import gen1dex from './gen1';
import { coromonDex } from './coromon';
import { Dex, WithId } from '@data/types';

export const dexes: WithId<Dex>[] = [gen1dex, coromonDex].map((i, id) => ({
  ...i,
  id,
}));
