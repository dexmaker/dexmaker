import { GetServerSideProps } from 'next';
import { EditPage, EditPageProps } from '@components/pages/EditPage';
import { dexes } from '@data/presets';

export default EditPage;

export const getServerSideProps: GetServerSideProps<EditPageProps> = async (
  req
) => {
  return {
    props: {
      dexId: Number(req.params?.dex),
      state: { dex: { dexes } },
    },
  };
};
