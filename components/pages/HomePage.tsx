import Link from 'next/link';
import { FC } from 'react';
import { MetaTags } from '@components/MetaTags';
import { Header } from '@components/ui/Header';
import { Dex } from '@data/types';

export interface HomePageProps {
  dexes: Dex[];
}

export const HomePage: FC<HomePageProps> = ({ dexes }) => {
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
