import React, { FC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getDexes } from "@helpers/getDexes";
import { Dex } from "@data/types";
import { TextLink } from "@components/ui/TextLink";

interface HomePageProps {
  dexes: Dex[];
}

const HomePage: FC<HomePageProps> = ({ dexes }) => {
  return (
    <div className="w-3xl mx-auto">
      <header>
        <h1 className="text-3xl mb-3">DexMaker</h1>
      </header>
      <main>
        <ul>
          {dexes.map((dex) => (
            <li key={dex.id}>
              <Link href={"/dex/" + dex.id} passHref>
                <TextLink>{dex.name}</TextLink>
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
