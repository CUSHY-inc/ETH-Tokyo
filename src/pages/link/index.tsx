import SubmitButton from '@/src/components/common/SubmitButton';
import Lens from '@/src/components/link/Lens';
import Worldcoin from '@/src/components/link/Worldcoin';
import Head from 'next/head';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Explain from '../../components/link/Explain';
import { RootState, store } from '../../store';
import NextButton from '@/src/components/link/NextButton';
import { useRouter } from 'next/router';

export default function Profile() {

  const router = useRouter();
  const next = () => {
    router.push('/choosing');
  }

  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header enable={false} />
      </header>
      <main>
        <div className='mt-24 flex justify-center items-center'>
          <Explain />
        </div>
        <div className='mt-16 flex justify-evenly'>
          <div className="w-fit">
            <Worldcoin />
          </div>
          <div className="w-fit">
            <Lens />
          </div>
        </div>
        <div className='mt-40 flex justify-evenly fixed bottom-10 w-full'>
          <NextButton onclick={next} />
        </div>
      </main>
    </Provider>
  );
}
