import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/matching/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';
import Footer from '../../components/common/Footer';
import Property from '../../components/matching/Property';
import Person from '@/src/components/matching/Person';
import { useEffect } from 'react';
import { RootState } from '../../store';
import MyProfile from '@/src/components/profile/MyProfile';

export default function Home() {

  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='flex justify-center mt-24'>
          <MyProfile />
        </div>
      </main>
      <footer>
        <div className='mt-16'>
          <Footer />
        </div>
      </footer>
    </Provider>
  );

}
