import { GetServerSideProps } from 'next';
import { MonPage, MonPageProps } from '@components/pages/MonPage';
import { dexes } from '@data/presets';

export default MonPage;

export const getServerSideProps: GetServerSideProps<MonPageProps> = async (
  req
) => {
  return {
    props: {
      monId: Number(req.params?.mon),
      dexId: Number(req.params?.dex),
      state: { dex: { dexes } },
    },
  };
};
