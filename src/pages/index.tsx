import Head from 'next/head';
import Header from '../components/common/Header'
import Metamask from '../components/connect/Metamask';
import Email from '../components/connect/Email';
import Title from '../components/connect/Title';
import { Provider } from 'react-redux';
import Footer from '../components/common/Footer';
import MetaMaskSDK from '@metamask/sdk';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store';

export default function Home() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>ETH-Tokyo</title>
          <meta name="description" content="ETH-Tokyo" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header>
          <Header />
        </header>
        <main>
          <div className='mt-16 flex justify-center items-center'>
            <Title />
          </div>
          <div className='mt-16 flex justify-evenly'>
            <div className="w-fit">
              <Metamask />
            </div>
          </div>
        </main>
        <footer>
          <div className='mt-16'>
            <Footer />
          </div>
        </footer>
      </PersistGate>
    </Provider>
  );
}
