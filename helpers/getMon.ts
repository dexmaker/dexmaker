import { getDexById } from "./getDexById";
import { Dex, Mon, QueryResult } from "@data/types";

export const getMon = (
  dexId: number,
  monId: number
): QueryResult<{ mon: Mon; dex: Dex }> => {
  const dexResult = getDexById(dexId);
  if (!dexResult.found) return { found: false };

  const dex = dexResult.data;
  const mon = dex.mons.find((mon) => mon.indexNumber === monId);
  if (!mon) return { found: false };

  return { found: true, data: { mon, dex } };
};
