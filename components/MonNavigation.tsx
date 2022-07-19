import React, { FC } from "react";
import Link from "next/link";
import { NavButton } from "./ui/NavButton";
import { Dex } from "@data/types";

export const MonNavigation: FC<{
  dex: Dex;
  current: number;
}> = ({ dex, current }) => {
  const mon = dex.mons.find((mon) => mon.indexNumber === current);
  const prev = dex.mons.indexOf(mon) > 0 && dex.mons[dex.mons.indexOf(mon) - 1];
  const next =
    dex.mons.indexOf(mon) < dex.mons.length - 1 &&
    dex.mons[dex.mons.indexOf(mon) + 1];

  return (
    <nav className="flex justify-center text-xs text-center">
      {prev && (
        <Link href={`/dex/${dex.id}/${prev.indexNumber}`} passHref>
          <NavButton>
            &larr; #{prev.indexNumber}
            <br />
            {prev.name}
          </NavButton>
        </Link>
      )}
      <NavButton aria-disabled>
        #{mon.indexNumber}
        <br />
        {mon.name}
      </NavButton>
      {next && (
        <Link href={`/dex/${dex.id}/${next.indexNumber}`} passHref>
          <NavButton>
            #{next.indexNumber} &rarr;
            <br />
            {next.name}
          </NavButton>
        </Link>
      )}
    </nav>
  );
};
