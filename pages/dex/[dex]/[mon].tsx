import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex, Mon, PokemonType } from "@data/types";
import { dexes } from "@data/dex";
import { MonSummary } from "@components/MonSummary";
import { TextLink } from "@components/ui/TextLink";
import { NavButton } from "@components/ui/NavButton";

interface MonPageProps {
  dex: Dex;
  mon: Mon;
  prev?: Mon;
  next?: Mon;
  dexId: string;
}

const MonPage: FC<MonPageProps> = ({ dexId, dex, mon, prev, next }) => {
  return (
    <>
      <nav>
        <TextLink>
          <Link href={`/dex/${dexId}`}>
            <a>Back</a>
          </Link>
        </TextLink>
      </nav>
      <MonSummary dex={dex} mon={mon} />
      <nav className="flex text-xs text-center">
        {prev && (
          <NavButton
            style={{ borderTopLeftRadius: 1, borderBottomLeftRadius: 1 }}
          >
            <Link href={`/dex/${dexId}/${prev.indexNumber}`}>
              <a>
                &larr; #{prev.indexNumber}
                <br />
                {prev.name}
              </a>
            </Link>
          </NavButton>
        )}
        <NavButton style={{ borderWidth: "1px 0" }} aria-disabled>
          #{mon.indexNumber}
          <br />
          {mon.name}
        </NavButton>
        {next && (
          <NavButton
            style={{ borderTopRightRadius: 1, borderBottomRightRadius: 1 }}
          >
            <Link href={`/dex/${dexId}/${next.indexNumber}`}>
              <a>
                #{next.indexNumber} &rarr;
                <br />
                {next.name}
              </a>
            </Link>
          </NavButton>
        )}
      </nav>
    </>
  );
};

export default MonPage;

export const getServerSideProps: GetServerSideProps<MonPageProps> = async (
  req
) => {
  const dexId = req.params.dex as string;
  const dex: Dex<string, PokemonType> = dexes[dexId];
  if (!dex) {
    return { notFound: true };
  }

  dex.mons.sort((a, b) => a.indexNumber - b.indexNumber);
  const mon = dex.mons.find(
    (mon) => mon.indexNumber === Number(req.params.mon)
  );

  if (!mon) {
    return { notFound: true };
  }

  const prev = dex.mons.indexOf(mon) > 0 && dex.mons[dex.mons.indexOf(mon) - 1];
  const next =
    dex.mons.indexOf(mon) < dex.mons.length - 1 &&
    dex.mons[dex.mons.indexOf(mon) + 1];

  return {
    props: {
      dex,
      mon,
      prev,
      next,
      dexId,
    },
  };
};
