import { dexes } from "@data/dex";
import { Dex, QueryResult } from "@data/types";

export const getDexById = (id: number): QueryResult<Dex> => {
  const dex = dexes.find((dex) => dex.id === id);
  if (!dex) return { found: false };

  dex.mons.sort((a, b) => a.indexNumber - b.indexNumber);

  return { found: true, data: dex };
};