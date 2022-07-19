import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex } from "@data/types";
import { dexes } from "@data/dex";
import { TypeBadge } from "@components/TypeBadge";
import { Title } from "@components/ui/Title";
import { TextLink } from "@components/ui/TextLink";

interface DexPageProps {
  dex: Dex;
}

const DexPage: FC<DexPageProps> = ({ dex }) => {
  return (
    <>
      <Title>{dex.dexName}</Title>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="text-left w-14">#</th>
            <th className="text-left">Name</th>
            <th className="text-left">Type</th>
          </tr>
        </thead>
        <tbody>
          {dex.mons.map((mon) => (
            <tr key={mon.indexNumber}>
              <td className="text-left">{mon.indexNumber}</td>
              <td>
                <Link href={`/dex/${dex.id}/${mon.indexNumber}`}>
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
  const dex: Dex = dexes.find((dex) => dex.id === Number(req.params.dex));
  if (!dex) {
    return { notFound: true };
  }

  return {
    props: {
      dex,
    },
  };
};
