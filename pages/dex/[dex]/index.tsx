import { GetServerSideProps } from "next";
import React, { FC } from "react";
import Link from "next/link";
import { Dex } from "@data/types";
import { Title } from "@components/ui/Title";
import { TextLink } from "@components/ui/TextLink";
import { getDexById } from "@helpers/getDexById";

interface DexPageProps {
  dex: Dex;
}

const DexPage: FC<DexPageProps> = ({ dex }) => {
  return (
    <>
      <Title>{dex.name}</Title>
      <table className="table-fixed overflow-x-auto">
        <thead>
          <tr>
            <th className="text-left w-14">#</th>
            <th className="text-left">Name</th>
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
  const dexResult = getDexById(Number(req.params?.dex));
  if (!dexResult.found) {
    return { notFound: true };
  }

  return {
    props: {
      dex: dexResult.data,
    },
  };
};
