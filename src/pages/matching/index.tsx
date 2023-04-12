import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/matching/Title';
import { Provider } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';

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
        <div className='mt-8 flex justify-center items-center'>
          <Title />
        </div>
        <div className='pt-8'>
            <Describe />
        </div>
      </main>
    </Provider>
  );

}