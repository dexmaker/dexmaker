import React, { FC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getDexes } from "@helpers/getDexes";
import { Dex } from "@data/types";
import { MetaTags } from "@components/MetaTags";
import { Header } from "@components/ui/Header";

interface HomePageProps {
  dexes: Dex[];
}

const HomePage: FC<HomePageProps> = ({ dexes }) => {
  return (
    <div className="w-3xl mx-auto">
      <MetaTags title="View dexes" canonicalUri="/" />
      <main className="page-content">
        <Header>DexMaker</Header>
        <ul>
          {dexes.map((dex) => (
            <li key={dex.id}>
              <Link href={"/dex/" + dex.id}>
                <a className="link">{dex.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  return { props: { dexes: getDexes().data } };
};
