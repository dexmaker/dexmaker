import Head from 'next/head';
import { FC } from 'react';

interface MetaTagsProps {
  title: string;
  canonicalUri: string;
}

const siteDescription =
  'Build and hack fictional monster encyclopedias for ROM hacks, theorymonning and more!';

export const MetaTags: FC<MetaTagsProps> = ({ title, canonicalUri }) => {
  const composedTitle = `${title} | DexMaker`;

  return (
    <Head>
      <title>{composedTitle}</title>
      <meta charSet='utf-8' />
      <meta name='description' content={siteDescription} />
      <meta name='robots' content='all' />
      <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
      <meta name='google' content='notranslate' key='notranslate' />
      <meta property='og:title' content={composedTitle} />
      <meta property='og:description' content={siteDescription} />
      <meta property='og:type' content='website' />
      <meta
        property='og:url'
        content={new URL(canonicalUri, 'https://dexmaker.lins.dev').toString()}
      />
      <meta
        property='og:image'
        content='https://dexmaker.lins.dev/images/RotomDex.png'
      />
    </Head>
  );
};
