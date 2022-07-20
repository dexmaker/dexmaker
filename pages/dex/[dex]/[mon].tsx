import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { Dex, Mon } from "@data/types";
import { MonSummary } from "@components/MonSummary";
import { MonNavigation } from "@components/MonNavigation";
import { getMon } from "@helpers/getMon";
import { MetaTags } from "@components/MetaTags";
import { PageNavigation } from "@components/ui/PageNavigation";

interface MonPageProps {
  dex: Dex;
  mon: Mon;
}

const MonPage: FC<MonPageProps> = ({ dex, mon }) => {
  return (
    <>
      <MetaTags
        title={mon.name}
        canonicalUri={`/dex/${dex.id}/${mon.indexNumber}`}
      />
      <PageNavigation backHref={`/dex/${dex.id}`} />
      <main className="page-content">
        <div className="max-w-2xl mx-auto">
          <MonSummary dex={dex} mon={mon} />
          <MonNavigation dex={dex} current={mon.indexNumber} />
        </div>
      </main>
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
