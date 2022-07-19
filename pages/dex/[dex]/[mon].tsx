import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex, Mon } from "@data/types";
import { dexes } from "@data/dex";
import { MonSummary } from "@components/MonSummary";
import { TextLink } from "@components/ui/TextLink";
import { MonNavigation } from "@components/MonNavigation";

interface MonPageProps {
  dex: Dex;
  mon: Mon;
}

const MonPage: FC<MonPageProps> = ({ dex, mon }) => {
  return (
    <>
      <nav>
        <TextLink>
          <Link href={`/dex/${dex.id}`}>
            <a>Back</a>
          </Link>
        </TextLink>
      </nav>
      <div className="max-w-2xl mx-auto">
        <MonSummary dex={dex} mon={mon} />
        <MonNavigation dex={dex} current={mon.indexNumber} />
      </div>
    </>
  );
};

export default MonPage;

export const getServerSideProps: GetServerSideProps<MonPageProps> = async (
  req
) => {
  const dex: Dex = dexes.find((dex) => dex.id === Number(req.params.dex));
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

  return {
    props: {
      dex,
      mon,
    },
  };
};
