import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/common/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';
import Footer from '../../components/common/Footer';
import Property from '../../components/matching/Property';
import { useEffect } from 'react';
import { RootState } from '../../store';
import SubmitButton from '@/src/components/common/SubmitButton';
import Person from '@/src/components/matching/Person';

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
        <div className='flex flex-col items-center justify-center'>
          <div className='mt-8'>
            <Title title="Let's connect with people" />
          </div>
          <div className='mt-16'>
            <SubmitButton  color='btn-primary' name='Start Huddle01 with them' />
          </div>
          <div className='mt-10'>
            <Person evaluate={false} />
          </div>
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
