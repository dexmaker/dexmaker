import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { Dex, Mon, PokemonType } from "@data/types";
import { dexes } from "@data/dex";
import { MonSummary } from "@components/MonSummary";

interface MonPageProps {
  dex: Dex;
  mon: Mon;
}

const MonPage: FC<MonPageProps> = ({ dex, mon }) => {
  return <MonSummary dex={dex} mon={mon} />;
};

export default MonPage;

export const getServerSideProps: GetServerSideProps<MonPageProps> = async (
  req
) => {
  const dex: Dex<string, PokemonType> = dexes[req.params.dex as string];
  const mon = dex.mons.find(
    (mon) => mon.indexNumber === Number(req.params.mon)
  );

  if (!dex || !mon) {
    return { notFound: true };
  }

  return {
    props: {
      dex,
      mon,
    },
  };
};
