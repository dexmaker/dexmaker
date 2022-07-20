import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex, Mon } from "@data/types";
import { MonSummary } from "@components/MonSummary";
import { TextLink } from "@components/ui/TextLink";
import { MonNavigation } from "@components/MonNavigation";
import { getMon } from "@helpers/getMon";

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
  const result = getMon(Number(req.params?.dex), Number(req.params?.mon));
  if (!result.found) return { notFound: true };

  const { dex, mon } = result.data;

  return {
    props: {
      dex,
      mon,
    },
  };
};
