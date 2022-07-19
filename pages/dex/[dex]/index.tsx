import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex, PokemonType } from "@data/types";
import { dexes } from "@data/dex";
import { TypeBadge } from "@components/TypeBadge";
import { Title } from "@components/ui/Title";
import { TextLink } from "@components/ui/TextLink";

interface DexPageProps {
  dex: Dex;
  dexId: string;
}

const DexPage: FC<DexPageProps> = ({ dex, dexId }) => {
  return (
    <>
      <Title>{dex.dexName}</Title>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Types</th>
          </tr>
        </thead>
        <tbody>
          {dex.mons.map((mon) => (
            <tr key={mon.indexNumber}>
              <td>{mon.indexNumber}</td>
              <td>
                <Link href={`/dex/${dexId}/${mon.indexNumber}`}>
                  <TextLink>{mon.name}</TextLink>
                </Link>
              </td>
              <td>
                <TypeBadge type={mon.types[0]} />
                {mon.types.length > 1 && <TypeBadge type={mon.types[1]} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DexPage;

export const getServerSideProps: GetServerSideProps<DexPageProps> = async (
  req
) => {
  const dex: Dex<string, PokemonType> = dexes[req.params.dex as string];
  if (!dex) {
    return { notFound: true };
  }

  return {
    props: {
      dex,
      dexId: req.params?.dex.toString(),
    },
  };
};
