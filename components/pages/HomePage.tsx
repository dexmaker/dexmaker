import Link from 'next/link';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { MetaTags } from '@components/MetaTags';
import { Header } from '@components/ui/Header';
import { PagePropsWithState, RootState } from '@data/store';
import { DexState } from '@data/store/reducers/dexReducer';

export type HomePageProps = PagePropsWithState;

export const HomePage: FC<HomePageProps> = () => {
  const { dexes } = useSelector<RootState, DexState>((state) => state.dex);

  return (
    <div className='w-3xl mx-auto'>
      <MetaTags title='View dexes' canonicalUri='/' />
      <main className='page-content'>
        <Header>DexMaker</Header>
        <ul>
          {dexes.map((dex) => (
            <li key={dex.id}>
              <Link href={'/dex/' + dex.id}>
                <a className='link'>{dex.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
