import SubmitButton from '@/src/components/common/SubmitButton';
import ImageButton from '@/src/components/profile/ImageButton';
import TextInput from '@/src/components/profile/TextInput';
import Head from 'next/head';
import { Provider } from 'react-redux';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Explain from '../../components/link/Explain';
import store from '../../store';
import Lens from '@/src/components/link/Lens';
import Worldcoin from '@/src/components/link/Worldcoin';

export default function Profile() {

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
        <div className='mt-8 flex justify-center items-center'>
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
        <div className='mt-40 flex justify-evenly'>
          <SubmitButton name='Skip' w='w-64' color='white' border='black'/>
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
