import { GetServerSideProps } from 'next';
import { getDexes } from '@helpers/getDexes';
import { HomePage, HomePageProps } from '@components/pages/HomePage';

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  return { props: { dexes: getDexes().data } };
};
