import React, { FC } from "react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { getDexes } from "@helpers/getDexes";
import { Dex } from "@data/types";
import { TextLink } from "@components/ui/TextLink";
import { MetaTags } from "@components/MetaTags";
import { Header } from "@components/ui/Header";
import { PageContent } from "@components/ui/PageContent";

interface HomePageProps {
  dexes: Dex[];
}

const HomePage: FC<HomePageProps> = ({ dexes }) => {
  return (
    <div className="w-3xl mx-auto">
      <MetaTags title="View dexes" canonicalUri="/" />
      <PageContent>
        <Header>DexMaker</Header>
        <ul>
          {dexes.map((dex) => (
            <li key={dex.id}>
              <TextLink>
                <Link href={"/dex/" + dex.id} passHref>
                  {dex.name}
                </Link>
              </TextLink>
            </li>
          ))}
        </ul>
      </PageContent>
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  return { props: { dexes: getDexes().data } };
};
