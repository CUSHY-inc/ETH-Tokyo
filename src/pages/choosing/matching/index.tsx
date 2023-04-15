import Head from 'next/head';
import Header from '../../../components/common/Header'
import Title from '../../../components/matching/Title';
import { Provider, useSelector } from 'react-redux';
import store from '../../../store';
import Describe from '../../../components/matching/Describe';
import Footer from '../../../components/common/Footer';
import Property from '../../../components/matching/Property';
import PersonMatch from '@/src/components/matching/PersonMatch';
import { RootState } from '../../../store';
import SubmitButton from '@/src/components/common/SubmitButton';

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
            <div className='flex justify-center mt-8'>
                <PersonMatch />
            </div>
            <div className='mt-8 flex justify-evenly'>
              <SubmitButton name='Start Chat' w='w-64' color='btn-primary' />
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
