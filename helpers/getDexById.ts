import { dexes } from "@data/presets";
import { Dex, QueryResult, WithId } from "@data/types";

export const getDexById = (id: number): QueryResult<WithId<Dex>> => {
  const dex = dexes.find((dex) => dex.id === id);
  if (!dex) return { found: false };

  dex.mons.sort((a, b) => a.indexNumber - b.indexNumber);

  return { found: true, data: dex };
};
