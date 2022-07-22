import { GetServerSideProps } from "next";
import { FC } from "react";
import Link from "next/link";
import { Dex } from "@data/types";
import { Header } from "@components/ui/Header";
import { getDexById } from "@helpers/getDexById";
import { MetaTags } from "@components/MetaTags";
import { PageNavigation } from "@components/ui/PageNavigation";
import { Export } from "@components/Export";

interface DexPageProps {
  dex: Dex;
}

const DexPage: FC<DexPageProps> = ({ dex }) => {
  return (
    <>
      <MetaTags title={dex.name} canonicalUri={`/dex/${dex.id}`} />
      <PageNavigation backHref="/" />
      <main className="page-content">
        <div className="flex justify-between">
          <Header>{dex.name}</Header>
          <div>
            <Export dex={dex} />
          </div>
        </div>
        <table className="table-fixed overflow-x-auto">
          <thead>
            <tr>
              <th />
              <th className="text-left w-14">#</th>
              <th className="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {dex.mons.map((mon) => (
              <tr key={mon.indexNumber}>
                <td>
                  {mon.spriteUrl && (
                    <div className="overflow-hidden flex justify-center items-center w-8 h-8 mr-2">
                      <img
                        src={mon.spriteUrl}
                        alt={mon.name}
                        className="w-5 h-auto"
                      />
                    </div>
                  )}
                </td>
                <td className="text-left">{mon.indexNumber}</td>
                <td>
                  <Link href={`/dex/${dex.id}/${mon.indexNumber}`}>
                    <a className="text-link">{mon.name}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
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
