import React, { FC } from "react";
import Link from "next/link";
import { Dex } from "@data/types";

export const MonNavigation: FC<{
  dex: Dex;
  current: number;
}> = ({ dex, current }) => {
  const mon = dex.mons.find((mon) => mon.indexNumber === current);
  const prev =
    mon && dex.mons.indexOf(mon) > 0 && dex.mons[dex.mons.indexOf(mon) - 1];
  const next =
    mon &&
    dex.mons.indexOf(mon) < dex.mons.length - 1 &&
    dex.mons[dex.mons.indexOf(mon) + 1];

  return (
    <nav className="flex justify-center text-xs text-center">
      {prev && (
        <Link href={`/dex/${dex.id}/${prev.indexNumber}`}>
          <button className="mon-nav">
            &larr; #{prev.indexNumber}
            <br />
            {prev.name}
          </button>
        </Link>
      )}
      {mon && (
        <button className="mon-nav" disabled>
          #{mon.indexNumber}
          <br />
          {mon.name}
        </button>
      )}
      {next && (
        <Link href={`/dex/${dex.id}/${next.indexNumber}`}>
          <button className="mon-nav">
            #{next.indexNumber} &rarr;
            <br />
            {next.name}
          </button>
        </Link>
      )}
    </nav>
  );
};
