import { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>AnimeRf</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
          fontFamily: 'Inter, sans-serif',
          headings: { fontFamily: 'Inter, sans-serif' },
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}
