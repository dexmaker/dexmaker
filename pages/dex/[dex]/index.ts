import { GetServerSideProps } from 'next';
import { DexPage, DexPageProps } from '@components/pages/DexPage';
import { dexes } from '@data/presets';

export default DexPage;

export const getServerSideProps: GetServerSideProps<DexPageProps> = async (
  req
) => {
  return {
    props: {
      dexId: Number(req.params?.dexId) || 0,
      state: {
        dex: {
          dexes,
        },
      },
    },
  };
};
