import { GetServerSideProps } from 'next';
import { HomePage, HomePageProps } from '@components/pages/HomePage';
import { dexes } from '@data/presets';

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  return { props: { state: { dex: { dexes } } } };
};
