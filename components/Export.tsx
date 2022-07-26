import { FC, useMemo } from 'react';
import { Dex } from '@data/types';

export const Export: FC<{ dex: Dex }> = ({ dex }) => {
  const dataUrl = useMemo(
    () => `data:text/json,${encodeURIComponent(JSON.stringify(dex))}`,
    [dex]
  );

  return (
    <a download={`${dex.name}.json`} href={dataUrl} className='btn'>
      Export
    </a>
  );
};
