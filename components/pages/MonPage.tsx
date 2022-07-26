import { FC } from 'react';
import { MetaTags } from '@components/MetaTags';
import { MonNavigation } from '@components/MonNavigation';
import { MonSummary } from '@components/MonSummary';
import { PageNavigation } from '@components/ui/PageNavigation';
import { Dex, Mon } from '@data/types';

export interface MonPageProps {
  dex: Dex;
  mon: Mon;
}

export const MonPage: FC<MonPageProps> = ({ dex, mon }) => {
  return (
    <>
      <MetaTags
        title={mon.name}
        canonicalUri={`/dex/${dex.id}/${mon.indexNumber}`}
      />
      <PageNavigation backHref={`/dex/${dex.id}`} />
      <main className='page-content'>
        <div className='max-w-2xl mx-auto'>
          <MonSummary dex={dex} mon={mon} />
          <MonNavigation dex={dex} current={mon.indexNumber} />
        </div>
      </main>
    </>
  );
};
