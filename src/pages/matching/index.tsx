import Head from 'next/head';
import Header from '../../components/common/Header'
import Title from '../../components/matching/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../store';
import Describe from '../../components/matching/Describe';
import Footer from '../../components/common/Footer';
import Property from '../../components/matching/Property';

export default function Home() {

  const attribute = 'Career'
  const items = ['Community moderator'];

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
        <div className='mt-3 ml-8'>
          <Property attribute={attribute} items={items} />
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
