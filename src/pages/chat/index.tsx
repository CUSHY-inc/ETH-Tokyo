import SubmitButton from '@/src/components/common/SubmitButton';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Chatmate from '../../components/chat/Chatmate';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import store from '../../store';
import postData from '@/src/features/chat/huddle01';

export default function Chat() {
  return (
    <Provider store={store}>
      <Head>
        <title>ETH-Tokyo</title>
        <meta name="description" content="ETH-Tokyo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header />
      </header>
      <main>
        <div className='flex-col items-center justify-center mt-20 ml-4'>
          <Chatmate image='/images/Avatar man1.png' name='Hibiki Sato' date='Mar 1' />
        </div>
        <hr className='mt-4'/>
        <div className='mt-16 flex justify-evenly'>
          <SubmitButton name='Start Huddle01' w='w-64' color='btn-primary' border='none' onclick={
            postData
          } />
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
