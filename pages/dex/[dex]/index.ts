import { GetServerSideProps } from "next";
import { getDexById } from "@helpers/getDexById";
import { DexPage, DexPageProps } from "@components/pages/DexPage";

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
