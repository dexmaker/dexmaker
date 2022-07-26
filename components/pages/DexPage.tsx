import Link from 'next/link';
import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Export } from '@components/Export';
import { MetaTags } from '@components/MetaTags';
import { Header } from '@components/ui/Header';
import { PageNavigation } from '@components/ui/PageNavigation';
import { PagePropsWithState, RootState } from '@data/store';
import { DexState } from '@data/store/reducers/dexReducer';

export interface DexPageProps extends PagePropsWithState {
  dexId: number;
}

export const DexPage: FC<DexPageProps> = ({ dexId }) => {
  const { dexes } = useSelector<RootState, DexState>((state) => state.dex);
  const currentDex = useMemo(
    () => dexes.find((dex) => dex.id === dexId),
    [dexes, dexId]
  );

  if (!currentDex) {
    return null;
  }

  return (
    <>
      <MetaTags
        title={currentDex.name}
        canonicalUri={`/dex/${currentDex.id}`}
      />
      <PageNavigation backHref='/' />
      <main className='page-content'>
        <div className='flex justify-between'>
          <Header>{currentDex.name}</Header>
          <div>
            <Export dex={currentDex} />
          </div>
        </div>
        <table className='table-fixed overflow-x-auto'>
          <thead>
            <tr>
              <th />
              <th className='text-left w-14'>#</th>
              <th className='text-left'>Name</th>
            </tr>
          </thead>
          <tbody>
            {currentDex.mons.map((mon) => (
              <tr key={mon.indexNumber}>
                <td>
                  {mon.spriteUrl && (
                    <div className='overflow-hidden flex justify-center items-center w-8 h-8 mr-2'>
                      <img
                        src={mon.spriteUrl}
                        alt={mon.name}
                        className='w-5 h-auto'
                      />
                    </div>
                  )}
                </td>
                <td className='text-left'>{mon.indexNumber}</td>
                <td>
                  <Link href={`/dex/${currentDex.id}/${mon.indexNumber}`}>
                    <a className='text-link'>{mon.name}</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};
