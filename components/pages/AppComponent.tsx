import { AppProps } from 'next/app';
import { Provider, useDispatch } from 'react-redux';
import { FC, useEffect } from 'react';
import { AppDispatch, store } from '@data/store';
import { Dex, WithId } from '@data/types';
import { setDexes } from '@data/store/reducers/dexReducer';

const LocalStorageLoader: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const customDexes: WithId<Dex>[] = JSON.parse(
      localStorage.getItem('dexes') || '[]'
    );
    if (customDexes.length) {
      dispatch(setDexes(customDexes));
    }
  }, [dispatch]);

  return null;
};

export const AppComponent: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store(pageProps.state)}>
    <LocalStorageLoader />
    <Component {...pageProps} />
  </Provider>
);
