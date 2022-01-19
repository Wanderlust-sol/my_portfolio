import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';
import Layout from '../components/Layout';
import { CommonContextProvider } from '../context/commonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonContextProvider>
      <ParallaxProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ParallaxProvider>
    </CommonContextProvider>
  );
}

export default MyApp;
