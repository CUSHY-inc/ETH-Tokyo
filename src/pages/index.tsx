import Head from 'next/head';
import Header from '../components/common/Header'
import Metamask from '../components/connect/Metamask';
import Email from '../components/connect/Email';
import Title from '../components/connect/Title';
import { Provider } from 'react-redux';
import store from '../store';
import Footer from '../components/common/Footer';
import MetaMaskSDK from '@metamask/sdk';

export default function Home() {

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
        <div className='mt-16 flex justify-center items-center'>
          <Title />
        </div>
        <div className='mt-16 flex justify-evenly'>
          <div className="w-fit">
            <Metamask />
          </div>
          <div className="w-fit">
            <Email />
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
