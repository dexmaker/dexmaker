import { GetServerSideProps } from "next";
import { getMon } from "@helpers/getMon";
import { MonPage, MonPageProps } from "@components/pages/MonPage";

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
