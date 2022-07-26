import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MetaTags } from '@components/MetaTags';
import { MonNavigation } from '@components/MonNavigation';
import { MonSummary } from '@components/MonSummary';
import { PageNavigation } from '@components/ui/PageNavigation';
import { PagePropsWithState, RootState } from '@data/store';
import { DexState } from '@data/store/reducers/dexReducer';

export interface MonPageProps extends PagePropsWithState {
  dexId: number;
  monId: number;
}

export const MonPage: FC<MonPageProps> = ({ dexId, monId }) => {
  const { dexes } = useSelector<RootState, DexState>((state) => state.dex);
  const currentDex = useMemo(
    () => dexes.find((dex) => dex.id === dexId),
    [dexes, dexId]
  );

  const currentMon = useMemo(
    () => currentDex?.mons.find((mon) => mon.indexNumber === monId),
    [currentDex, monId]
  );

  if (!currentDex || !currentMon) return null;

  return (
    <>
      <MetaTags
        title={currentMon.name}
        canonicalUri={`/dex/${currentDex.id}/${currentMon.indexNumber}`}
      />
      <PageNavigation backHref={`/dex/${currentDex.id}`} />
      <main className='page-content'>
        <div className='max-w-2xl mx-auto'>
          <MonSummary dex={currentDex} mon={currentMon} />
          <MonNavigation dex={currentDex} current={currentMon.indexNumber} />
        </div>
      </main>
    </>
  );
};
